
    //-------------------------------------------------------------------------------
    // BASE_URL => URL PADRÃO DO SITE | HERE_URL => URL ATUAL
    //-------------------------------------------------------------------------------
    var base_url = window.location.origin + '/icontrole/';
    var here_url = document.URL;

    //-------------------------------------------------------------------------------
    // SCRIPT QUE INSERE UM NOVO CADASTRO COM DADOS DINÂMICOS
    //-------------------------------------------------------------------------------
    $('form#new').submit(function(){
        var url = here_url;
        var model = $('input[name="model"]').val();
        var dados = $(this).serialize();
        $.ajax({
            url: base_url + 'new/'+ model +'/null/ajax',
            type: "POST",
            data: dados
        }).done(function(retorno){
            if(retorno == true){
                swal({
                        title: "Cadastrado com sucesso",
                        text: "Seu dado foi salvo",
                        type: "success",
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Ok",
                        closeOnConfirm: false
                    },
                    function(){
                        window.location.href = url;
                    });
            }else{
                swal("Houve um erro", "Tente novamente daqui a pouco", "error")
            }
        }).fail(function(){
            swal("Houve um erro", "Tente novamente daqui a pouco", "error")
        });
        return false;
    });

    //-------------------------------------------------------------------------------
    // SCRIPT QUE EDITA INFORMAÇÕES DE DADOS DINÂMICOS
    //-------------------------------------------------------------------------------
    $("button#update").click(function(e){
        var id = $(this).data("id");
        var colecao = $(this).data("colecao");
        var options = {
            url: base_url+"viewUpdate/"+colecao+'/'+id,
            title:'Editar',
            size: eModal.size.lg,
            buttons: [
                {text: 'Cancelar', style: 'danger',   close: true }
            ]
        };
        eModal.ajax(options);
    });

    //-------------------------------------------------------------------------------
    // SCRIPT QUE DELETA AS INFORMAÇÕES DE DADOS DINÂMICOS
    //-------------------------------------------------------------------------------
    $('.delete-one').click(function(){
        var url = here_url;
        var colecao = $(this).data('colecao');
        var id = $(this).data('id');
        $.ajax({
            url: base_url + 'delete/',
            type: "POST",
            data: {id: id, colecao: colecao}
        }).done(function(retorno){
            if(retorno == true){
                swal({
                        title: "Deletado",
                        text: "Seu dado foi deletado com sucesso",
                        type: "success",
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Ok",
                        closeOnConfirm: false
                    },
                    function(){
                        window.location.href = url;
                    });
            }else{
                swal("Ops, houve um erro!", "aperte 'f5' em seu teclado e tente novamente", "error")
            }
        }).fail(function(){
            swal("Ops, houve um erro!", "aperte 'f5' em seu teclado e tente novamente", "error")
        });
        return false;
    });

    //-------------------------------------------------------------------------------
    // SCRIPT EDITA INFORMAÇÕES DO MENU
    //-------------------------------------------------------------------------------
    $("button#update-menu").click(function(){
        var id = $(this).data("id");
        var nome = $(this).data("nome");
        var options = {
            url: base_url+"updateMenu/"+id,
            title:'Editar Usuário '+ nome,
            size: eModal.size.lg,
            buttons: [
                {text: 'Cancelar', style: 'danger',   close: true }
            ]
        };
        eModal.ajax(options);
    });

    //-------------------------------------------------------------------------------
    // SCRIPT QUE EDITA INFORMAÇÕES DO USUÁRIO
    //-------------------------------------------------------------------------------
    $("button#update-user").click(function(){
        var id = $(this).data('id');
        var nome = $(this).data('nome');
        var options = {
            url: base_url+"updateUser/"+id,
            title:'Editar '+ nome,
            size: eModal.size.lg,
            buttons: [
                {text: 'Cancelar', style: 'danger',   close: true }
            ]
        };
        eModal.ajax(options);
    });

     //-------------------------------------------------------------------------------
    // FUNÇÃO AUTORIZA PAGAMENTO E LIBERA ACESSO AO USUÁRIO
    //-------------------------------------------------------------------------------
    $("button#autoriza").click(function(){
        var id = $(this).data('id');
        var plano = $(this).data('plano');
        swal({
                title: "Autorizar acesso",
                text: "Quer mesmo autorizar o acesso ao cliente",
                type: "warning",
                showCancelButton: true,
                cancelButtonText: "Cancelar",
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, autorizar!",
                closeOnConfirm: false
            },
            function(){
                jQuery.ajax({
                    type: 'POST',
                    url: base_url+'liberaAcesso/'+id+"/"+plano

                }).done(function(e){
                    if(e == true){
                        swal("Acesso liberado com sucesso", "success");
                        window.location.href = here_url;
                    }else{
                        alert('Ops, Houve um erro!');
                    }
                }).fail(function(e){
                    alert('Ops, Houve um erro!<br>obs: fail');
                });
                return false;
            });

    });


    //-------------------------------------------------------------------------------
    // CARREGA PLUGINS ( PREVIEW IMAGENS - DATA MASK - SUMMERNOTE TEXTAREA )
    //-------------------------------------------------------------------------------
    $(document).ready(function() {
        //Editor de texto
        $('.editor-textarea').summernote({height: 440});

        //Data mask Telefone
        var SPMaskBehavior = function (val) {
                return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
            },
            spOptions = {
                onKeyPress: function(val, e, field, options) {
                    field.mask(SPMaskBehavior.apply({}, arguments), options);
                }
            };
        $('.telefone').mask(SPMaskBehavior, spOptions);
        $('.dinheiro').mask('000.000.000.000.000,00', {reverse: true});
        $('.cnpj').mask('00.000.000/0000-00', {reverse: true});

    });



