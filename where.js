


// const Search = document.getElementById('search');
// const MyDiv = document.getElementById('MyDiv');
// const div = document.getElementById('ImgDiv');
// const answerText = document.getElementById('answerText');
const resultsDiv = document.getElementById("results");
const btn=document.getElementById("btn");
    btn.addEventListener("click",()=>{
        if(resultsDiv.style.display==='none'){
            resultsDiv.style.display='block';
    }else{
        resultsDiv.style.display='none';
    }

    })

const data = {
    'Bijnor': '06:45, 09:30, 10:00, 10:15, 10:30, 13:45, 16:25, 17:20, 17:25',  
    'chandpur': '08:00, 10:45, 11:15, 11:30, 11:45, 15:00, 17:30, 18:00, 18:30', 
    'muzaffarnagar': '07:30, 08:00, 08:30, 15:00, 15:30, 16:00', 
    'gajroula': '16:30'
  };

  function searchData() {
    // Get the value from the search input
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    



    // Filter data based on input
    const filteredData = Object.keys(data).filter(key => key.toLowerCase().includes(input));

    // Display the results
    if (filteredData.length > 0) {
      resultsDiv.innerHTML = filteredData.map(key => `<p><strong>${key}</strong>: ${data[key]}</p>`).join('');
    } else {
      resultsDiv.innerHTML = '<p>No results found.</p>';
    }
  }
// });
