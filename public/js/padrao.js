var questoes = 0;

var encontrarLabelArquivo = () => {
    $(".labelArquivo").each(function(){
        $(this).children(".inputarquivo").css("height", $(this).children(".btn-a").css("height"));
        $(this).children(".inputarquivo").css("bottom", ((parseInt($(this).children(".btn-a").css("height"))/5)-2)+"px");
    })
}
var encontrarScrollQuestao = (scrollTela) =>{
    if($(this).scrollTop == scrollTela){
        console.log("Passou");
    }
}
$(window).scroll(function(){
    if(this.scrollY == 0){
         $(".navPadrao").removeClass("navScroll");
    }
    else{
        $(".navPadrao").addClass("navScroll");
    }
});

$(document).ready(function(){
    $(".backdoc").css("minHeight",window.innerHeight);
    $(".fundoDegrade").css("minHeight",window.innerHeight);
});

$(".itemLista").click(function(){
    $('#ModalLista').modal('toggle')
});

encontrarLabelArquivo();

$(window).resize(function(){
    encontrarLabelArquivo();
});

$(".correta").click(function(){
    $("#alternativa-"+$(this).attr("id")).parent().children().each(function(){
        $(this).removeClass("alternativaCorreta");
        $(this).children("input").removeAttr("checked");
    });

    $(this).parent().parent().addClass("alternativaCorreta");
    $(this).parent().parent().children("input").attr("checked", true);
});

$(".deletar").click(function(){
    $(this).parent().parent().remove();
})

$(".removerQuestão").click(function(){
    if(questoes != 0){
        $(this).parent().parent().remove();
        questoes--;
    }
        
})

$(".adicionarQuestão").click(function(){
    questoes++;
});
$(".adicionarAlternativa").click(function(){
    let id = $(this).attr("id").split('-')[1];
})
$(".adicionarTexto").click(function(){
    let id = $(this).attr("id").split('-')[1];
    if($("#txtTexto-"+id).attr("hidden") == "hidden"){
        $("#txtTexto-"+id).attr("hidden", false);
    }
    else{
        $("#txtTexto-"+id).attr("hidden", true);
    }
})
$(".adicionarTextoAlternativa").click(function(){
    
    let id = $(this).attr("id").split('-')[1];
    if($("#txtTextoAlternativa-"+id).attr("hidden") == "hidden"){
        $("#txtTextoAlternativa-"+id).attr("hidden", false);
    }
    else{
        $("#txtTextoAlternativa-"+id).attr("hidden", true);
    }
})
$(".removerTexto").click(function(){
    console.log("Clicou");
    let id = $(this).attr("id").split('-')[1];
})

$(".inputarquivo[type=file]").change(function(){
    let id = $(this).attr("id").split('-')[1];
    //$(this).parent().parent().children("label").children().children().attr("src", $(this).val());
    //$("#imagemQuestao-"+id).attr("src", $(this).eq(0).val());
    readUrl(this, $("#imagemQuestao-"+id));
    $("#imagemQuestao-"+id).parent().attr("hidden", false);
    console.log($("#imagemQuestao-"+id));
})
$(".deletarImagem").click(function(){
    let id = $(this).attr("id").split('-')[1];
    $("#imagemQuestao-"+id).parent().attr("hidden", true);
    $("#imagemQuestao-"+id).attr("src", "");
    $("arquivoQuestao-"+id).val("");

})

$(".inputarquivoAlternativa[type=file]").change(function(){
    let id = $(this).attr("id").split('-')[1];
    //$(this).parent().parent().children("label").children().children().attr("src", $(this).val());
    //$("#imagemQuestao-"+id).attr("src", $(this).eq(0).val());
    readUrl(this, $("#imagemQuestaoAlternativa-"+id));
    $("#imagemQuestaoAlternativa-"+id).parent().attr("hidden", false);
    console.log($("#imagemQuestaoAlternativa-"+id));
})
$(".deletarImagemAlternativa").click(function(){
    let id = $(this).attr("id").split('-')[1];
    $("#imagemQuestaoAlternativa-"+id).parent().attr("hidden", true);
    $("#imagemQuestaoAlternativa-"+id).attr("src", "");
    $("arquivoQuestaoAlternativa-"+id).val("");

})
var readUrl = (input, imagem) => {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            imagem.attr('src', e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
    }
    else {
        var img = input.value;
        imagem.attr('src',img);
    }
}