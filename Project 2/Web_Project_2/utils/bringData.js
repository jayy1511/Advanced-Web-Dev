document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("[data-form]"); // Ensure this selector matches an element in your HTML.

    const url = 'https://google-search74.p.rapidapi.com/?query=&limit=10&related_keywords=true';
    bringData(url);
});

export const bringData = async (url) => {
    // Check if the h2 element exists before trying to modify it
    const h2Element = document.querySelector("h2");
    if (h2Element) {
        h2Element.classList.add("d-none");
    } else {
        console.error("h2 element not found");
    }

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bfc7953943msh431067ed91529abp181653jsncc01aac63a53', // Replace with your actual API key
            'x-rapidapi-host': 'google-search74.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        showData(result);
        console.log(result);
    } catch (error) {
        console.error(error);
        const spinner = document.querySelector(".spinner-container");
        if (spinner) {
            spinner.style.display = "none"; // Hide the loading spinner if it exists
        }
        const dynamicDataContainer = document.querySelector(".dynamic_data");
        if (dynamicDataContainer) {
            dynamicDataContainer.innerHTML = `<pre>${error}</pre>`;
        }
    }
};

const showData = (data) => {
    const spinner = document.querySelector(".spinner-container");
    if (spinner) {
        spinner.classList.add("d-none"); // Hide the loading spinner if it exists
    }

    const h2Element = document.querySelector("h2");
    if (h2Element) {
        h2Element.classList.remove("d-none"); // Show the heading if it exists
    }

    // Display Search Results
    if (data.results) {
        data.results.forEach((result) => {
            const resultHtml = `
            <div class="col">
                <article class="card">
                    <div class="card-body">
                        <h5 class="card-title"><a href="${result.url}" target="_blank">${result.title}</a></h5>
                        <p class="card-text">${result.description}</p>
                    </div>
                </article>
            </div>
            `;
            document.querySelector(".dynamic_data").innerHTML += resultHtml;
        });
    } else {
        console.error("Results not found in the response");
    }
};
