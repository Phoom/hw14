// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");

var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");

var $searchBtn = document.querySelector("#search");

var filteredUfo = dataSet;

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);


function renderTable(){
    console.log("Running Table");
    $tbody.innerHTML = "";

    for (var i = 0; i< filteredUfo.length; i++) {
        // get current address/fields
        var ufo = filteredUfo[i];
        var fields = Object.keys(ufo);
        
        // Create new row
        var $row = $tbody.insertRow(i);

        // Populate for every data point on row
        for (var j = 0; j <fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = ufo[field];
        }
    }
}

function handleSearchButtonClick() 
{

    // new variable to equal to date input
    var filterDate = $dateInput.value.trim();
    var filterCity = $cityInput.value.trim().toLowerCase();
    var filterState = $stateInput.value.trim().toLowerCase();
    var filterCountry = $countryInput.value.trim().toLowerCase();
    var filterShape = $shapeInput.value.trim().toLowerCase();

    filteredUfo = dataSet.filter(function(ufo)
    {
        var counter = 0
        var finalSearch = "";

          if (filterDate != "")
        {   
            var ufoDate = ufo.datetime;
            // return (ufoDate === filterDate);          
            if(ufoDate === filterDate)
            {
                if (counter > 0)
                {
                    finalSearch += "&& (ufoDate === filterDate)";
                    counter += 1;
                }
                else
                {
                    finalSearch += "(ufoDate === filterDate)";
                    counter += 1;
                }
            }
        };
    
        if (filterCity != "")
        {
            var ufoCity = ufo.city.toLowerCase();

            if(ufoCity === filterCity)
            {
                if (counter > 0)
                {
                    finalSearch += "&& (ufoCity === filterCity)";
                    counter += 1;
                }
                else
                {
                    finalSearch += "(ufoCity === filterCity)";
                    counter += 1;
                }
            }
        };

        if (filterState != "")
        {
            var ufoState = ufo.state.toLowerCase();

            if(ufoState === filterState)
            {
                if (counter > 0)
                {
                    finalSearch += "&& (ufoState === filterState)";
                    counter += 1;
                }
                else
                {
                    finalSearch += "(ufoState === filterState)";
                    counter += 1;
                }
            }
        };

        if (filterCountry != "")
        {
            var ufoCountry = ufo.country.toLowerCase();

            if(ufoCountry === filterCountry)
            {
                if (counter > 0)
                {
                    finalSearch += "&& (ufoCountry === filterCountry)";
                    counter += 1;
                }
                else
                {
                    finalSearch += "(ufoCountry === filterCountry)";
                    counter += 1;
                }
            }
        };

        if (filterShape != "")
        {
            var ufoShape = ufo.shape.toLowerCase();

            if(ufoShape === filterShape)
            {
                if (counter > 0)
                {
                    finalSearch += "&& (ufoShape === filterShape)";
                    counter += 1;
                }
                else
                {
                    finalSearch += "(ufoShape === filterShape)";
                    counter += 1;
                }
            }
        };

        console.log("test statement:  " +finalSearch);
        return (finalSearch);

    });

    renderTable();
}

renderTable();
