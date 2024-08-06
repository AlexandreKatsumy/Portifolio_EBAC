$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const descricaoNovaTarefa = $('#nova-tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`
            <div class="tarefa">
                <p>${descricaoNovaTarefa}</p>
            </div>
            `).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).fadeIn(5000);
        $('#nova-tarefa').val('');
        })

    $('ul').on('click', 'p', function() {
        $(this).toggleClass("checked");
    })
})
