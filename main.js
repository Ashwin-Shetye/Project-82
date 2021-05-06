var images=["https://st.depositphotos.com/1724125/2693/v/950/depositphotos_26930203-stock-illustration-cartoon-dad.jpg","https://cdn5.vectorstock.com/i/1000x1000/45/09/cute-cartoon-a-young-mother-vector-4414509.jpg","https://i.pinimg.com/736x/77/d4/15/77d41520a3f07995b184797a3734bf44.jpg","https://i.pinimg.com/originals/d5/6c/d2/d56cd25436d0d3f56ad2f143750f7455.png","https://image.shutterstock.com/image-illustration/cartoon-old-woman-cane-260nw-1376524529.jpg"];
var names=["father","mother","brother","grandpa","grandma"];
var i=0
function update()
{
    
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;

}