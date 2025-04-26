document.addEventListener('DOMContentLoaded', () => {
    $('#planetTable').DataTable({
        responsive: true,
        pageLength: 8,
        lengthMenu: [[8, 16, 32, -1], [8, 16, 32, "All"]],
        order: [[1, 'desc']], // Default sort by diameter
        columnDefs: [
            {
                targets: [1, 2, 3, 4], // Columns with numeric data (all except planet name)
                type: 'num',
                render: function(data) {
                    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
            }
        ],
        language: {
            search: "Search planets:",
            lengthMenu: "Show _MENU_ planets",
            info: "Showing _START_ to _END_ of _TOTAL_ planets",
            infoEmpty: "No planets found",
            infoFiltered: "(filtered from _MAX_ total planets)"
        }
    });
}); 