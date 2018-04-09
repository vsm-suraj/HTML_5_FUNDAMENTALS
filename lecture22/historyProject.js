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
            history.pushState(
                'data to save',
                data.title,
                data.href,
            )
        }
    };

    viewer.init()
})();