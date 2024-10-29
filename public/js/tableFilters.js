// checkboxes
document.addEventListener("DOMContentLoaded", () => {
  const tableHeaders = document.querySelectorAll("thead th");
  const checkboxContainer = document.querySelector(".checkbox-container");

  // generate checkboxes
  tableHeaders.forEach((header) => {
    const column = header.dataset.column;
    if (column) {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");

      checkbox.type = "checkbox";
      checkbox.dataset.column = column;
      checkbox.checked = true;

      label.appendChild(checkbox);
      label.append(` ${header.textContent}`);
      checkboxContainer.appendChild(label);

      // add event listener for toggling column visibility
      checkbox.addEventListener("change", (e) => {
        const columnClass = e.target.dataset.column;
        const cells = document.querySelectorAll(
          `table [data-column="${columnClass}"]`
        );

        cells.forEach((cell) => {
          cell.style.display = e.target.checked ? "" : "none";
        });
      });
    }
  });
});

// filtering by name
document.addEventListener("DOMContentLoaded", () => {
  const filterInput = document.getElementById("filterInput");
  const tableBody = document.querySelector(".drivers-table tbody");
  const rows = Array.from(tableBody.querySelectorAll("tr"));

  // clear on page load (otherwise there might be text on it but it will not be filtering based on it :V)
  filterInput.value = "";

  filterInput.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();

    rows.forEach((row) => {
      const name = row
        .querySelector("td[data-column='name']")
        .textContent.toLowerCase();
      row.style.display = name.includes(searchText) ? "" : "none";
    });
  });
});
