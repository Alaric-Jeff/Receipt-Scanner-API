import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import logger from './utils/logger.js';
import { upload } from './utils/multer.js';
import { extractTextFromImage } from './utils/tesseractConfig.js';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(
  '/upload-image',
  upload.single('image'),
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    try {
      const imagePath = path.resolve(req.file.path); 
      const extractedText = await extractTextFromImage(imagePath);

      await prisma.receipt.create({
        data: {
          text: extractedText,
        }
      })

      res.status(200).json({
        message: 'Image uploaded and processed successfully',
        file: req.file,
        text: extractedText,
      });
    } catch (error: any) {
      logger.error(`Error during OCR: ${error.message}`);
      res.status(500).json({ error: 'Failed to process image with OCR' });
    }
  }
);

app.listen(process.env.PORT, () => {
  logger.info(`Server is running on port ${process.env.PORT}`);
});
