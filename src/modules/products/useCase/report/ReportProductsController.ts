import { Request, Response } from 'express';
import { ReportProductsUseCase } from './ReportProductsUseCase';
import fs from 'fs';

class ReportProductsController {
  async handle(request: Request, response: Response) {
    const reportProductsUseCase = new ReportProductsUseCase();
    const pdfDoc = await reportProductsUseCase.execute();
    const chunks = [];

    //   pdfDoc.pipe(fs.createWriteStream('Relatorio.pdf'));

    pdfDoc.on('data', (chunk) => {
      chunks.push(chunk);
    });

    pdfDoc.end();

    pdfDoc.on('end', () => {
      const result = Buffer.concat(chunks);
      return response.end(result);
    });
  }
}

export { ReportProductsController };
