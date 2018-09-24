// Prevent from orphaned & widowed paraghraph
$('h3').each(function(){
    var string = $(this).html();
    string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
    $(this).html(string);
});