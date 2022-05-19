<html>
    <head>
        <title>Meu primeiro site em PHP !!!!</title>
        <script src = "https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <style type = "text/css">
            .linha
            {
                font-weight: bold;
                color: green;
                padding-left: 10px;
                line-height: 50px;
            }
        </style>
    </head>
    <body>
        
        <?php
            /* precisa da <?php codigo ?> para funcionar, o titulo acima na verdade é o nome da pagina */
            for ($i = 0; $i < 10; $i++)
            {
                //foi adicionada a tag span class = \"linha\" e fechada antes de pular a linha com </span>
                //essa tag serve para que em cada linha, o codigo use a funcao linha em css acima para "formatar" a linha
                print("<span class = \"linha\">Linha numero ".($i+1)."</span><br />");
            }
        ?>
    </body>
    <script type = "text/javascript">
        //informa que será realizado esse script apenas quando a pagina tiver sido carregada inteira
        // precisa da linha de script do header para importar a biblioteca do JS
        $(document).ready(function()
        {
            alert("woohoo!");
        });
    </script>
    
</html>