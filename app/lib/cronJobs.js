"use server";
import { query } from "./db";
import cron from "node-cron";

const generateInvoices = async (nextMemberId, package_price, lastMemberId) => {
  try {
    const members = await query({
      query: `SELECT Id, start_date, package_id FROM members`,
      values: [],
    });

    for (const member of members) {
      const { Id, start_date, package_id } = member;

      const packageResult = await query({
        query: `SELECT DurationUnit, DurationValue FROM Package WHERE PackageID = ?`,
        values: [package_id],
      });

      if (packageResult.length === 0) {
        console.error(`No package found for package_id ${package_id}`);
        continue;
      }

      const { DurationUnit, DurationValue } = packageResult[0];

      const lastInvoiceDateResult = await query({
        query: `SELECT MAX(invoice_date) AS last_invoice_date FROM m_invoice WHERE m_id = ?`,
        values: [Id],
      });

      const lastInvoiceDate =
        lastInvoiceDateResult[0].last_invoice_date || start_date;
      let nextInvoiceDate = new Date(lastInvoiceDate)
        .toISOString()
        .split("T")[0];
      switch (DurationUnit) {
        case "day":
          nextInvoiceDate.setDate(nextInvoiceDate.getDate() + DurationValue);
          break;
        case "week":
          nextInvoiceDate.setDate(
            nextInvoiceDate.getDate() + DurationValue * 7
          );
          break;
        case "month":
          nextInvoiceDate.setMonth(nextInvoiceDate.getMonth() + DurationValue);
          break;
        case "year":
          nextInvoiceDate.setFullYear(
            nextInvoiceDate.getFullYear() + DurationValue
          );
          break;
      }

      const now = new Date().toISOString().split("T")[0];
      if (nextInvoiceDate <= now) {
        const invoiceSql =
          "INSERT INTO invoices (member_id, invoice_date, invoice_due_amount, created_date, member_id, m_id) VALUES (?, ?, ?)";
        const amount = package_price[0].Price; // Use the passed package price

        await query({
          query: invoiceSql,
          values: [
            Id,
            nextInvoiceDate,
            amount,
            now,
            nextMemberId,
            lastMemberId[0].Id,
          ],
        });

        console.log(`Invoice generated for member ${Id}`);
      }
    }
  } catch (err) {
    console.error("Error generating invoices:", err);
  }
};

// Schedule invoice generation
cron.schedule("0 0 * * *", () => {
  generateInvoices();
  console.log("Invoices generated");
});

export default generateInvoices;
