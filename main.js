fetch("https://dev.whenisthenextmcufilm.com/api")
  .then(res => res.json())
  .then(data => {
    const {
      days_until: days_until,
      overview: overview,
      following_production: following_production,
      poster_url: poster_url,
      release_date: release_date,
      title: title,
      type: type,
    } = data;

    document.querySelector(".projectName").textContent = title;
    document.querySelector(".daysNumber").textContent = days_until;
    document.querySelector(".releaseDate").textContent = release_date;
    document.querySelector(".productionType").textContent = type;
    document.querySelector(".nextProject").textContent =
      following_production.title;
    const posterImage = document.querySelector(".posterImg");
    posterImage.src = poster_url;
  });
