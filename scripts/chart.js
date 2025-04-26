document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('spaceChart').getContext('2d');

    // Data for the chart
    const spaceObjects = [
        { name: 'Voyager 1', distance: 163, exceptional: true },
        { name: 'Voyager 2', distance: 136, exceptional: true },
        { name: 'Pioneer 10', distance: 129, exceptional: true },
        { name: 'Pioneer 11', distance: 105, exceptional: true },
        { name: 'New Horizons', distance: 55, exceptional: false },
        { name: 'Hubble', distance: 0.0001, exceptional: false },
        { name: 'James Webb', distance: 0.0001, exceptional: false },
        { name: 'Cassini', distance: 9.5, exceptional: false },
        { name: 'Galileo', distance: 5.2, exceptional: false },
        { name: 'Juno', distance: 5.2, exceptional: false },
        { name: 'Mars Rovers', distance: 1.5, exceptional: false },
        { name: 'Lunar Probes', distance: 0.0026, exceptional: false }
    ];

    // Sort by distance in descending order
    spaceObjects.sort((a, b) => b.distance - a.distance);

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: spaceObjects.map(obj => obj.name),
            datasets: [{
                label: 'Distance from Earth (AU)',
                data: spaceObjects.map(obj => obj.distance),
                backgroundColor: spaceObjects.map(obj => obj.exceptional ? 'rgba(255, 99, 132, 0.7)' : 'rgba(54, 162, 235, 0.7)'),
                borderColor: spaceObjects.map(obj => obj.exceptional ? 'rgba(255, 99, 132, 1)' : 'rgba(54, 162, 235, 1)'),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Distance (AU)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Space Object',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.raw} AU (${(context.raw * 93).toFixed(1)} million miles)`;
                        }
                    }
                }
            }
        }
    });
}); 