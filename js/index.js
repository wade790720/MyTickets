var tricketLifeTag = $('.tricket[data-role="life"]')
var tricketHeroTag = $('.tricket[data-role="hero"]')
var appBackground = $(".background")
var tricketLife = $(`<div class="tricket" data-role="life">
                          <div class="tricket-header">
                            <div class="set-circle">
                              <div class="big-circle circle-top-left"></div>
                              <div class="top-circle"></div>
                              <div class="top-circle"></div>
                              <div class="top-circle"></div>
                              <div class="top-circle"></div>
                              <div class="top-circle"></div>
                              <div class="top-circle"></div>
                              <div class="top-circle"></div>
                              <div class="top-circle"></div>
                              <div class="top-circle"></div>
                              <div class="top-circle"></div>
                              <div class="top-circle"></div>
                              <div class="top-circle"></div>
                              <div class="top-circle"></div>
                              <div class="top-circle"></div>
                              <div class="fake-area"></div>
                              <div class="big-circle circle-top-right last"></div>
                            </div>
                            <div class="tricket-no">
                              <p>N0. 29346773820432</p>
                            </div>
                          </div>
                          <div class="tricket-banner life"></div>
                          <div class="tricket-data">
                            <div class="movie-name"><span>The Secret Life of Walter Mitty</span></div>
                            <div class="movie-block">
                              <p>SALON</p>
                              <p>07</p>
                            </div>
                            <div class="movie-block">
                              <p>ROW</p>
                              <p>12</p>
                            </div>
                            <div class="movie-block">
                              <p>SEAT</p>
                              <p>23</p>
                            </div>
                            <div class="movie-block">
                              <p>DATE</p>
                              <p class="fz-sm">18/07/15</p>
                            </div>
                            <div class="movie-block">
                              <p>TIME</p>
                              <p class="fz-sm"> 19:20</p>
                            </div>
                            <div class="movie-block">
                              <p>PRICE</p>
                              <p class="fz-sm"> $350</p>
                            </div>
                            <div class="clear"></div>
                          </div>
                          <div class="tricket-footer">
                            <div class="big-circle circle-bottom-left"></div>
                            <div class="bottom-circle"></div>
                            <div class="bottom-circle"></div>
                            <div class="bottom-circle"></div>
                            <div class="bottom-circle"></div>
                            <div class="bottom-circle"></div>
                            <div class="bottom-circle"></div>
                            <div class="bottom-circle"></div>
                            <div class="bottom-circle"></div>
                            <div class="bottom-circle"></div>
                            <div class="bottom-circle"></div>
                            <div class="bottom-circle"></div>
                            <div class="bottom-circle"></div>
                            <div class="bottom-circle"></div>
                            <div class="bottom-circle"></div>
                            <div class="fake-area"></div>
                            <div class="big-circle circle-bottom-right last"></div>
                          </div>
                        </div>`)
var triccketHero = $(`<div class="tricket" data-role="hero">
                        <div class="tricket-header">
                          <div class="set-circle">
                            <div class="big-circle circle-top-left"></div>
                            <div class="top-circle"></div>
                            <div class="top-circle"></div>
                            <div class="top-circle"></div>
                            <div class="top-circle"></div>
                            <div class="top-circle"></div>
                            <div class="top-circle"></div>
                            <div class="top-circle"></div>
                            <div class="top-circle"></div>
                            <div class="top-circle"></div>
                            <div class="top-circle"></div>
                            <div class="top-circle"></div>
                            <div class="top-circle"></div>
                            <div class="top-circle"></div>
                            <div class="top-circle"></div>
                            <div class="fake-area"></div>
                            <div class="big-circle circle-top-right last"></div>
                          </div>
                          <div class="tricket-no">
                            <p>N0. 29346773820432</p>
                          </div>
                        </div>
                        <div class="tricket-banner hero"></div>
                        <div class="tricket-data">
                          <div class="movie-name"><span>The Secret Life of Walter Mitty</span></div>
                          <div class="movie-block">
                            <p>SALON</p>
                            <p>07</p>
                          </div>
                          <div class="movie-block">
                            <p>ROW</p>
                            <p>12</p>
                          </div>
                          <div class="movie-block">
                            <p>SEAT</p>
                            <p>23</p>
                          </div>
                          <div class="movie-block">
                            <p>DATE</p>
                            <p class="fz-sm">18/07/15</p>
                          </div>
                          <div class="movie-block">
                            <p>TIME</p>
                            <p class="fz-sm"> 19:20</p>
                          </div>
                          <div class="movie-block">
                            <p>PRICE</p>
                            <p class="fz-sm"> $350</p>
                          </div>
                          <div class="clear"></div>
                        </div>
                        <div class="tricket-footer">
                          <div class="big-circle circle-bottom-left"></div>
                          <div class="bottom-circle"></div>
                          <div class="bottom-circle"></div>
                          <div class="bottom-circle"></div>
                          <div class="bottom-circle"></div>
                          <div class="bottom-circle"></div>
                          <div class="bottom-circle"></div>
                          <div class="bottom-circle"></div>
                          <div class="bottom-circle"></div>
                          <div class="bottom-circle"></div>
                          <div class="bottom-circle"></div>
                          <div class="bottom-circle"></div>
                          <div class="bottom-circle"></div>
                          <div class="bottom-circle"></div>
                          <div class="bottom-circle"></div>
                          <div class="fake-area"></div>
                          <div class="big-circle circle-bottom-right last"></div>
                        </div>
                      </div>`)

$(function() {
    $(".content-wrapper").swipe({
        //Generic swipe handler for all directions
        swipe: function(top) {
            $('.tricket:first-child').addClass("tricket-tear")
            setTimeout('removeTricket()', 500)
        }
    });
});

function removeTricket() {
    $(".tricket-tear").remove()
    appBackground.removeClass('bg01').addClass('bg02')
    $(".content-wrapper").append(tricketLife)
}
