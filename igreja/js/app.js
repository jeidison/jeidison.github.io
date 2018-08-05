$(document).ready(function () {
    $('#trocaAudiencia').click(function () {
        if ($('#toggleAudiencia').is(':hidden')) {
            $('#toggleAudiencia').slideDown('slow');
        } else {
            $('#toggleAudiencia').slideUp('slow');
        }
        $('#notifica_form_irmao').css("display", "none");
        $('#notifica_icone_irmao').css("display", "block");
        $('#notifica_form_igreja').css("display", "none");
        $('#notifica_icone_igreja').css("display", "block");
        $('#notifica_form_pais').css("display", "none");
        $('#notifica_icone_pais').css("display", "block");
    });
});

//funcoes de Validacao
function validarEmail() { //Quando sair do campo
    $(this).css("border-color", "rgba(255,255,255,0.20)");
    if ($(this).val().length < 3) {
        $(this).css("border-color", "red");
    }
    if (!isNaN($(this).val())) {
        $(this).css("border-color", "red");
    }
    if ($(this).val() == "") {
        $(this).css("border-color", "rgba(255,255,255,0.20)");
    }
}
;
function restauraCssEmail() {
    $(this).css("border-color", "rgba(255,255,255,0.20)");
}
;

//Valida Form
$(document).ready(function () {
    //Valida Form
    $("#digite_email").blur(validarEmail);
    $("#digite_email").focus(restauraCssEmail);
    $("#assunto_email").blur(validarEmail);
    $("#assunto_email").focus(restauraCssEmail);
    $("#nome_email").blur(validarEmail);
    $("#nome_email").focus(restauraCssEmail);
    $("#mensagem_email").blur(validarEmail);
    $("#mensagem_email").focus(restauraCssEmail);
});

$(document).ready(function () {
    //FORM EMAIL
    $('#resetar_email').click(function () {
        $("#digite_email").css("border-color", "rgba(255,255,255,0.20)");
        $("#assunto_email").css("border-color", "rgba(255,255,255,0.20)");
        $("#nome_email").css("border-color", "rgba(255,255,255,0.20)");
        $("#mensagem_email").css("border-color", "rgba(255,255,255,0.20)");
        $("#formInfo_email").html('')
    });
    //Envia Formulário Irmão
    $('#form_email').submit(function () {
        /* Quando clicar em Comunicar */
        $('IDenviaEmail').mouseout(function () {
            $('#formInfo_email').slideUp('slow');
            $('#formInfo_email').html('')
        });
        /* Coletando dados */
        var email = $('#digite_email').val();
        var assunto = $('#assunto_email').val();
        var nome = $('#nome_email').val();
        var telefone = $('#telefone_email').val();
        var celular = $('#celular_email').val();
        var endereco = $('#endereco_email').val();
        var cidade = $('#cidade_email').val();
        var cep = $('#cep_email').val();
        var estado = $('#estado_email').val();
        var pais = $('#pais_email').val();
        var pastor = $('#pastor_email').val();
        var mensagem = $('#mensagem_email').val();

        if (email == "") {
            $('#digite_email').css("border-color", "red");
        }
        if (assunto == "") {
            $('#assunto_email').css("border-color", "red");
        }
        if (nome == "") {
            $('#nome_email').css("border-color", "red");
        }
        if (mensagem == "") {
            $('#mensagem_email').css("border-color", "red");
        }

        var emailBorderColor = $("#email_email").css("border-color");
        var assuntoBorderColor = $("#assunto_email").css("border-color");
        var nomeBorderColor = $("#nome_email").css("border-color");
        var mensagemBorderColor = $("#mensagem_email").css("border-color");

        //valida campos - identifica se algum campo está com borda vermelha
        if (emailBorderColor == "rgb(255, 0, 0)" || assuntoBorderColor == "rgb(255, 0, 0)" || nomeBorderColor == "rgb(255, 0, 0)" || mensagemBorderColor == "rgb(255, 0, 0)") {
            $("#formInfo_email").html('Os&nbsp;campos marcados em vermelho são obrigatórios!');
            $('#formInfo_email').slideDown('slow');

            $("#digite_email").focus(function () {
                $("#formInfo_email").html('')
            });
            $("#assunto_email").focus(function () {
                $("#formInfo_email").html('')
            });
            $("#nome_email").focus(function () {
                $("#formInfo_email").html('')
            });
            $("#mensagem_email").focus(function () {
                $("#formInfo_email").html('')
            });
            return false;
        }
        /* construindo url */
        var urlData = "&email=" + email + "&nome=" + nome + "&telefone=" + telefone + "&celular=" + celular + "&endereco=" + endereco + "&cidade=" + cidade + "&estado=" + estado + "&pais=" + pais + "&pastor=" + pastor + "&mensagem=" + mensagem;
        $.ajax({
            type: "POST",
            url: "envia_form_email.php",
            async: true,
            data: urlData,
            beforeSend: function () {
                $('#infoEmail').css("display", "block");
                $('#IDEnviandoFormEmail').css("display", "block");
                $('#IDsucessoFormEmail').css("display", "none");
                $('#IDerroFormEmail').css("display", "none");
            },
            success: function (data) {
                $('#envia_email').css("display", "none");
                $('#IDEnviandoFormEmail').css("display", "none");
                $('#IDerroFormEmail').css("display", "none");
                $('#IDsucessoFormEmail').css("display", "block");
                $('#apareceEmail').css("display", "none");
            },
            error: function () {
                $('#IDEnviandoFormEmail').css("display", "none");
                $('#IDerroFormEmail').css("display", "block");
                $('#IDsucessoFormEmail').css("display", "none");
            },
            complete: function () {
                $('#form_email').each(function () {
                    this.reset();
                });
            }
        });
        return false;
    });
});

function abrir(estado) {
    $('#lista_igrejas').html("");
    $.getJSON('end_igrejas_json.php?estado=' + estado, function (data) {
        $.each(data, function (key, val) {
            $('#lista_igrejas').append('<div class="cad_igrejas"><p style="color:rgba(0,219,255,0.7)">' + val.cidade + ' - ' + val.estado + '</p><p class="cad_igrejas_end" >' + val.endereco + '</p><p class="cad_igrejas_end">' + val.fone + ' - ' + val.fax + '</p><p">Pr. ' + val.nome + '</p></div>'
            );
        });
    });
};