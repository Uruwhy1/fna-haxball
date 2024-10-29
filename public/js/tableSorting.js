document.addEventListener("DOMContentLoaded", () => {
  const driversTable = document.querySelector(".drivers-table");

  driversTable.querySelectorAll("th").forEach((header) => {
    header.addEventListener("click", () => {
      const tableBody = driversTable.querySelector("tbody");
      const rows = Array.from(tableBody.querySelectorAll("tr"));

      const order = header.getAttribute("data-order");

      if (!order) return;
      const sortedRows = rows.sort((a, b) => {
        const aText = a
          .querySelector(`td:nth-child(${header.cellIndex + 1})`)
          .textContent.trim();
        const bText = b
          .querySelector(`td:nth-child(${header.cellIndex + 1})`)
          .textContent.trim();

        const aVal = isNaN(aText)
          ? aText
          : parseFloat(aText.replace(/[^\d.-]/g, ""));
        const bVal = isNaN(bText)
          ? bText
          : parseFloat(bText.replace(/[^\d.-]/g, ""));

        return order === "asc" ? (aVal > bVal ? 1 : -1) : aVal < bVal ? 1 : -1;
      });

      tableBody.innerHTML = "";
      sortedRows.forEach((row) => tableBody.appendChild(row));

      header.setAttribute("data-order", order === "asc" ? "desc" : "asc");
    });
  });
});
