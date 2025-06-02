import tesseract from 'node-tesseract-ocr';

const config: tesseract.Config = {
  lang: 'eng',
  oem: 1,
  psm: 3,
};

export const extractTextFromImage = async (imagePath: string): Promise<string> => {
  try {
    const text = await tesseract.recognize(imagePath, config);
    const productLines = text.match(/.*(Product|Item|Name).*/gi) || [];
    const priceLines = text.match(/.*(Price|Cost).*\$?[\d,.]+.*/gi) || [];
    const combinedLines = Array.from(new Set([...productLines, ...priceLines]));

    if (combinedLines.length > 0) {
      return combinedLines.join('\n');
    }

    return text.trim();

  } catch (error) {
    console.error('Tesseract OCR error:', error);
    return '';
  }
};

  