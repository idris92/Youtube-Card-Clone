fetch('http://www.omdbapi.com/?s=Batman&page=2&apikey=ae5aee64', {
	method: 'GET'
})
	.then((response) => response.json())
	.then((data) => {
		data.Search.map((item) => {
			document.getElementById('top').innerHTML += `<div class="  col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
            <div class="card movie-cards">
                <div class="card-top">
                    <img src=${item.Poster}>
                </div>
                <div class="card-body back">
                    <div class="row">
                        <div class="avatar col-sm-2"></div>
                        <div class='col-sm-10 title'>
                            <h3>${item.Title}</h3><i class=' menu fa fa-ellipsis-v'></i>
                            <p>${item.Title.split(':')[0]}</p>
                            <div class="row metadata">
                                <div class="col-sm-6">464k Views</div>
                                <div class="col-sm-6">${item.Year}</div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>`;
		});
	})
	.catch((error) => {
		console.log(error);
	});
