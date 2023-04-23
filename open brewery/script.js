async function nameData(event) {
    try {
      let ele = document.getElementById('search').value;
      console.log(ele);
      // event.preventDefault()
      let data = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${ele}&per_page=6`)
      let res = await data.json();
      console.log(res);
      document.querySelector('.data_area').innerHTML = '';
      for (let x of res) {
        let child = `<p class="items">Name : ${x.name}</p>
        <p class="items">Type : ${x.breweries_type}</p>
        <p class="items">Address : ${x.street}</p>
        <p class="items" >Website : <a target="_blank" href="${x.website_url}">Check our Website</a></p>
        <p class="items">Phone : ${x.phone}</p>
        <p class="items">city : ${x.city}</p>`;
  
        let contentdiv = document.createElement('div');
        contentdiv.setAttribute('class', 'content-parent');
        contentdiv.innerHTML = child;
        document.querySelector('.data_area').append(contentdiv);
      }
    } catch (err) {
      console.log(err);
    }
  }