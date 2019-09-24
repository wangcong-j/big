var leibie = {
    search: function (san) {
        $.get(
            url.search,
            function (res) {
                san(res);
            }
        )
    },
    add: function (name, slug, san) {
        $.post(
            url.add,
            {
                name: name,
                slug:slug,
            },
            function (res) {
                san(res);
            }
        )
    },
    // edit: function (id, name, slug, san) {
    //     $.post(
    //         url.edit,
    //     )
        
    // }

    
}