let url = "https://kontests.net/api/v1/all";

let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((contests) => {
    console.log(contests);
    ihtml = "";
    for (item in contests) {
      console.log(contests[item]);
      let rn = Math.floor(Math.random() * 11);
      let s = `${rn}.JPG`;
      let image_src = `images/${rn}.JPG`;

      ihtml += `
        <div class="card my-4" style="width: 22rem">
        <img src="${image_src}" class="card-img-top" alt="Image of the contest are here" />
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>

          <p class="card-text">Contest Name : ${contests[item].name} </p>
          <p class="card-text">Start Time: ${contests[item].start_time} </p>
          <p class="card-text">End Time : ${contests[item].end_time} </p>
          <p class="card-text">Website : ${contests[item].site} </p>
          <p class="card-text">In 25-HR : ${contests[item].in_24_hours} </p>
          <a href="${contests[item].url}"  target="_blank" class="btn btn-primary ">Visit Site</a>
        </div>
      </div>
        `;
    }
    window.document.getElementById("cardcontainer").innerHTML = ihtml;
  });
