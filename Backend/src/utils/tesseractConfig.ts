import tesseract from 'node-tesseract-ocr';

const config: tesseract.Config = {
  lang: 'eng',
  oem: 1,
  psm: 3,
};

export const extractTextFromImage = async (imagePath: string): Promise<string> => {
  return await tesseract.recognize(imagePath, config);
};
