var a=100;

function sample() {
    console.log(a);

    function inner()
    {
        var a=200;
        console.log(a);
        var x= "kavyashree"
    }
    inner()
}
    sample()