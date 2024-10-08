const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a function to generate the invoice
function createInvoice(invoice, path) {
  let doc = new PDFDocument({ margin: 50 });

  generateHeader(doc);
  generateCustomerInformation(doc, invoice);
  generateInvoiceTable(doc, invoice);
  generateFooter(doc);

  doc.end();
  doc.pipe(fs.createWriteStream(path));
}

function generateHeader(doc) {
  // doc
  //   .image('logo.png', 50, 45, { width: 50 })
  //   .fillColor('#444444')
  //   .fontSize(20)
  //   .text('Your Company Name', 110, 57)
  //   .fontSize(10)
  //   .text('Your Company Name', 200, 50, { align: 'right' })
  //   .text('123 Main Street', 200, 65, { align: 'right' })
  //   .text('New York, NY, 10025', 200, 80, { align: 'right' })
  //   .moveDown();
}

function generateCustomerInformation(doc, invoice) {
  doc
    .fillColor('#444444')
    .fontSize(20)
    .text('Invoice', 50, 160);

  generateHr(doc, 185);

  const customerInformationTop = 200;

  doc
    .fontSize(10)
    .text('Invoice Number:', 50, customerInformationTop)
    .font('Helvetica-Bold')
    .text(invoice.invoiceNumber, 150, customerInformationTop)
    .font('Helvetica')
    .text('Invoice Date:', 50, customerInformationTop + 15)
    .text(invoice.invoiceDate, 150, customerInformationTop + 15)
    .text('Balance Due:', 50, customerInformationTop + 30)
    .text(
      formatCurrency(invoice.subtotal - invoice.paid),
      150,
      customerInformationTop + 30
    )
    .font('Helvetica-Bold')
    .text(invoice.shipping.name, 300, customerInformationTop)
    .font('Helvetica')
    .text(invoice.shipping.address, 300, customerInformationTop + 15)
    .text(
      invoice.shipping.city +
        ', ' +
        invoice.shipping.state +
        ', ' +
        invoice.shipping.country,
      300,
      customerInformationTop + 30
    )
    .moveDown();

  generateHr(doc, 252);
}

function generateInvoiceTable(doc, invoice) {
  let i;
  const invoiceTableTop = 330;

  doc.font('Helvetica-Bold');
  generateTableRow(
    doc,
    invoiceTableTop,
    'Task',
    'Week day',
    'Working Hours',
    '$/Per Hour',
    'Total Cost'
  );
  generateHr(doc, invoiceTableTop + 20);
  doc.font('Helvetica');

  for (i = 0; i < invoice.items.length; i++) {
    const item = invoice.items[i];
    const position = invoiceTableTop + (i + 1) * 30;
    generateTableRow(
      doc,
      position,
      item.item,
      item.description,
      formatCurrency(item.amount),
      item.quantity,
      formatCurrency(item.amount * item.quantity)
    );

    generateHr(doc, position + 20);
  }

  const subtotalPosition = invoiceTableTop + (i + 1) * 30;
  generateTableRow(
    doc,
    subtotalPosition,
    '',
    '',
    'Subtotal',
    '',
    formatCurrency(invoice.subtotal)
  );

  const paidToDatePosition = subtotalPosition + 20;
  generateTableRow(
    doc,
    paidToDatePosition,
    '',
    '',
    'Paid To Date',
    '',
    formatCurrency(invoice.paid)
  );

  const duePosition = paidToDatePosition + 25;
  doc.font('Helvetica-Bold');
  generateTableRow(
    doc,
    duePosition,
    '',
    '',
    'Balance Due',
    '',
    formatCurrency(invoice.subtotal - invoice.paid)
  );
  doc.font('Helvetica');
}

function generateFooter(doc) {
  doc
    .fontSize(10)
    .text(
      'Payment is due within 1 days. Thank you for your business.',
      50,
      780,
      { align: 'center', width: 500 }
    );
}

function generateTableRow(
  doc,
  y,
  item,
  description,
  unitCost,
  quantity,
  lineTotal
) {
  doc
    .fontSize(10)
    .text(item, 50, y)
    .text(description, 150, y)
    .text(unitCost, 280, y, { width: 90, align: 'right' })
    .text(quantity, 370, y, { width: 90, align: 'right' })
    .text(lineTotal, 0, y, { align: 'right' });
}

function generateHr(doc, y) {
  doc
    .strokeColor('#aaaaaa')
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}

function formatCurrency(cents) {
  return '$' + (cents / 100).toFixed(2);
}

function formatDate(date) {
  const [year, month, day] = new Date(date).toISOString().split('T')[0].split('-');
  return `${month}/${day}/${year}`;
}

// Example invoice data
const invoice = {
  shipping: {
    name: 'John Doe',
    address: '1234 Main Street',
    city: 'San Francisco',
    state: 'CA',
    country: 'US',
    postal_code: 94111
  },
  items: [
    {
      item: '',
      description: 'Create a new website design',
      amount: 50000,
      quantity: 1
    },
    {
      item: 'Website maintenance',
      description: 'Monthly maintenance of the website',
      amount: 15000,
      quantity: 3
    }
  ],
  subtotal: 95000,
  paid: 0,
  invoiceNumber: 1234,
  invoiceDate: formatDate(new Date())
};

// Create the invoice PDF
createInvoice(invoice, 'invoice.pdf');
