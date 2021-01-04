import brigadeiroPrincipal from "../../images/pic01.jpg";
import segundoBrigadeiro from "../../images/pic02.jpg"

function Principal() {
    return (
<div>
<div id="banner" class="container"> 
    <img src={brigadeiroPrincipal} width="1200" height="500" alt="" />
</div>
<div id="page" class="container">
	<div id="content">
		<div class="title">
			<h2>Bem-vindo <span class="byline">à Choco Titi</span></h2>
		</div>
		<a href="#" class="image image-full"><img src={segundoBrigadeiro} alt="" /></a>
	</div>
	<div id="sidebar">
		<h2 class="title">O melhor brigadeiro que você já comeu</h2>
		<ul class="style2">
			<li class="first">
				<h3><a href="#">Ingredientes de qualidade</a></h3>
				<p><a href="#">Aqui não tem Nescau!</a></p>
			</li>
			<li>
				<h3><a href="#">O melhor preparo</a></h3>
				<p><a href="#">Temos a melhor receita!</a></p>
			</li>
			<li>
				<h3><a href="#">Sempre disponível</a></h3>
				<p><a href="#">Brigadeiros todo dia!</a></p>
			</li>
		</ul>
	</div>
</div>
<div id="footer" class="container">
	<div id="fbox3">
		<h2 class="title">Social</h2>
		<ul class="style1">
			<li class="first"><a href="#">Twitter</a></li>
			<li><a href="#">Facebook</a></li>
			<li><a href="#">Flickr</a></li>
			<li><a href="#">Google +</a></li>
		</ul>
	</div>
</div>
</div>
    );
  }
  
  export default Principal;