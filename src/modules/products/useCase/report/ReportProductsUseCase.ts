import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';
import PDFPrinter from 'pdfmake';
import { TDocumentDefinitions, TableCell } from 'pdfmake/interfaces';

class ReportProductsUseCase {
  async execute() {
    const productsRepository = getRepository(Product);

    const products = await productsRepository.find();
    
    const fonts = {
      Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique',
      },
    };

    const printer = new PDFPrinter(fonts);

    const body = [];

    const columnsTitle: TableCell[] = [
      { text: 'ID', style: 'id' },
      { text: 'Descrição', style: 'columnsTitle' },
      { text: 'Preço (R$)', style: 'columnsTitle' },
      { text: 'Quantidade', style: 'columnsTitle' },
    ];

    const columnsBody = new Array();
    columnsTitle.forEach((column) => columnsBody.push(column));
    body.push(columnsBody);

    for await (let product of products) {
      const rows = new Array();
      rows.push(product.id);
      rows.push(product.description);
      rows.push(product.price);
      rows.push(product.quantity);

      body.push(rows);
    }

    const docDefinitions: TDocumentDefinitions = {
      defaultStyle: { font: 'Helvetica' },
      content: [
        {
          columns: [
            { text: 'Relatório de produtos', style: 'header' },
            { text: '01/10/2021 11:00\n\n', style: 'header' },
          ],
        },
        {
          table: {
            heights: function () {
              return 30;
            },
            widths: [230, 110, 75, 'auto'],
            body,
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
        },
        columnsTitle: {
          fontSize: 13,
          bold: true,
          fillColor: '#7159c1',
          color: '#FFF',
          alignment: 'center',
          margin: 4,
        },
        id: {
          fillColor: '#999',
          color: '#fff',
          alignment: 'center',
          margin: 4,
        },
      },
    };

    const pdfDoc = printer.createPdfKitDocument(docDefinitions);

    return pdfDoc;
  }
}

export { ReportProductsUseCase };
