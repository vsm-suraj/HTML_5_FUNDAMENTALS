;(function(){
    var viewer =   {
        template: $("#template").html(),

        init: function(){
            $('ul').on('click','a',function(e){
                viewer.applyTemplate(this)
                        .updateHistory(this);

                e.preventDefault();
            })

        },

        applyTemplate: function(data){
            var template = this.template.replace(/{{title}}/g,data.title).replace(/{{srcImg}}/g,data.href);

            $('.result').children().remove().end().append(template);
        },

        updateHistory = function(data){
            var dataTosave = {
                title: data.title,
                href: data.href,
                url: data.dataset.url
            }
            history.pushState(
                dataTosave,
                data.title,
                data.dataset.url,
            )
        },

        handleState: function(data){
            $window.on('popstate',function(e){
                if(e.originalEvent.state)
                {
                    viewer.applyTemplate(e.originalEvent.state);
                }
            });
        }
    };

    viewer.init()
})();