
    $(
      function () {

        $('#calc').click(function () {

            fc = $('.input-group').toArray();
            out = fc
            //map fuction takes in 2 arguement (function, elements)
            //
                    .map( function(e) {  return ($(e).find('.form-control'))[0]; } )
                    .map( function(e) {  return $(e).val() } )

            count = out
                      .map(function (e) {
                        if(e === '') return 0;

                        return 1;
                      })


            out = out.map( function(e) {
                      if(e === 'A' || e === 'a') return 4;
                      else if(e === 'B' || e === 'b') return 3;
                      else if(e === 'C' || e === 'c') return 2;
                      else if(e === 'D' || e === 'd') return 1;
                      else if(e === 'F' || e === 'f') return 0;
                      else {
                          var num = parseInt(e) || 0;
                          if( num <= 4 && num >= 0) {
                            return num;
                          }

                          return 0;
                      }


                    })


            var classTaken = 0;
            for (var i = count.length - 1; i >= 0; i--) {
              classTaken += count[i];
            };

            var sum = 0;
            for (var i = out.length - 1; i >= 0; i--) {
              sum += out[i];
            };

            sum *= 1.0;
            sum /= classTaken;
            sum =  parseFloat( sum.toFixed(2) );
            $('.badge').html(sum)        });


      })
