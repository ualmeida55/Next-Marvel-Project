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

    document.querySelector(".overview").textContent = overview;
  });
