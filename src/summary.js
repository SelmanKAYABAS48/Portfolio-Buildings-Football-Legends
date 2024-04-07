// proje'ye baktığımızda gördüğümüz ilk header sonra input bölümü sonra da cardların olduğu bölüm buna main de diyebiliriz..

// cardlar bölümünde resimin üztüne tıkladığımızda resim gidip bilgiler gelecek.Öncelikle bunun için onClick eventi oluşturmamız lazım.

//! onClick olduğunda ekrandaki ver değişmesi için toggle yapmamız lazım. toggle mantığını kurmak için değişikliği saklayacağım bunu kullanacağım useState kullanmam lazım.toggle yapısını da user'a göstermek için ternary kurmam lazım ternary ya da short circuit kullnadığımızda bunun teknik adı conditional rendering'tir

//? inputta verilerin saklanması sonra temizlenmesi için onChange event'i kullanırız.


// jsx içinde div yerine container yazarsam div className="container" demek oluyor

//! eğer resim statik olarak varsa src içindeyse import etmeden kullanamayız

// import ederken resmin uzantsını da yazıyoruz css varsa onun uzantısını da yazıyoruz

// resim ve yazının ortalamasını istiyorsak en dış kapsayıcıya yani app js'de text center yapıyoruz

// h1 etiktinde football legends yazısı var..ancak bu yazının width'i geniş. bunu display inline-block yaptık ve img ile h1 yanyana geldi sonra img ile h1 arasına br atıp inline block olan yazıyı aşağı aldık


 //! legendContainer'da çalışıyorum
// sonra bootstrap'ten form ekledim ancak sadece form.control kısmını aldım.Bunu type'ına search decodeURIComponent.Searc yazınca input alanında x çıkıyor silmek için




// daha sonra helper'dan data'yı almak için legendCard component'ninde import{data} from"../../helper/data" yazıp import ettik


// jsx alanında js kodu yazacaksam süslü içinde yazarım

const LegendContainer =()=>{
    console.log(data);
    return(
       <div><Form.Control type="search" placeholder="Search Legends" />
       <Container>
        <Row>
           {
           data.map((Legend) =>(<col></col>) )
           }
        </Row>
       </Container>
       </div> 
    )
// } div'in içinde className'i container olan kapsayıcı açtım ve içine row oluşturdum.row içinde süslü açarak içine data.map((legend)=>(<row></row> )) oluşturdum.datanın içindeki herbir item'ı dolaşırken bunu col içine oluştur yaptım. //! legend item oluyor yani datanın içindeki herbir item

const LegendContainer = () => {
    return (
      <div>
        <Form.Control type="search" placeholder="Search Legends" />
        <Container>
          <Row>
            {data.map((Legend) => (
              <Col > {/* Key prop eklenmeli */}
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title> {/* Legend verileri doğru şekilde kullanılmalı */}
                    <Card.Text>
                      some quick... {/* Legend verileri doğru şekilde kullanılmalı */}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  };  //! bu şekilde cardları bastık 
  //? react bootstrap'ten card yapısını aldım col içine bastık

  //! col'da responsive için normalde card'a width verilmişti biz ancak onu responsive tasarım yapma için width sildik onun yerine col'a verdik 
  <col xs={10} sm={8} md={6} lg={4} xl={3}> yaptık..
 bu esnekliği width heigth ile uğraşadan yani card'a verdiği width ile uğraşmadan column'a esneklik vererek yaparız.

 <Row xs={1} md={2} lg={3} ></Row>  //! </col> yerine kapsayıcı düzeyde row'dan da verebiliriz 

//  daha sonra card'lara resim basmak için maplediğimiz data'nın herbir legend'ını  <Card.Img variant="top" src={legend.img} /> legend.img diyerek data'daki resimleri aldık

//! daha sonra statistics bilgilerini ul açarak içinde süslüye legend.statistics.map(item=><li>{item}</li>) yazarak herbir istatistiği liste olarak yazdırdık

// altına  <span>{legend.official_career}</span> yazarak kariyerlerini yazdırdık


// daha sonra sayfa açıldığında ilk başta resim gözükecek tıklayınca resim açılacak şekilde olmasını sağlamak için toggle mantığı kurmam lazım ki bu da useState ile yaparız state ismi setter veririrz.başlangıç değerine false verdik

import {useState} from "react";

const LegendContainer = () => {
    const [show,setShow] = useState(false);
    

    <Card>

    {
        !show ? <Card.Img variant="top" src={legend.img} />:
        <>
           <Card.Header>
      <Card.Title>{legend.name}</Card.Title>{" "}
      {/* Legend verileri doğru şekilde kullanılmalı */}
    </Card.Header>
    <ul className="m-auto">
      {
        legend.statistics.map(item=><li className="list-unstyled h5 text-start"> ⚽️{item}</li>)
      }
    </ul>
    <span>{legend.official_career}</span></>
    }
   
 
  </Card>  //! yukarıda yaptığım işlem  card içinde js işlemi yapacağım için süslü açtım içine    !show başlangıçtaki ifadenin tersini alır.true ise img'yi göster false ise bilgileri göster 
  //? burada fragment kullandım çünkü jsx'te birden fazla element kullanılacaksa biz container içine alırız elementleri ancak fragment kullanımı dom ağacında herhangi bir element basmayacağı için kullanılır
{
    !show ? <Card.Img variant="top" src={legend.img} />:
    <>
       <Card.Header>
  <Card.Title>{legend.name}</Card.Title>{" "}
  {/* Legend verileri doğru şekilde kullanılmalı */}
</Card.Header>
<ul className="m-auto">
  {
    legend.statistics.map(item=><li className="list-unstyled h5 text-start"> ⚽️{item}</li>)
  }
</ul>
<span>{legend.official_career}</span></>
}


</Card>

// map yaptığımızda bizden key prop'u ister hatırlarsan önceki derste görmüştük key.id şekilde..<> yaptığımda burada key propu veremem ancak <fragment > olarak yazarsam key prop'u verebilirim

// ben yukarıda <> yerine div yazsaydım dom için gereksiz yük olacaktı.


//! tıklayınca resimin deişmesi için onclick event'i kullanıyorum onClick={()=> setShow(!show)} burada setter'ı  render etmek için () kullandım ve içine !show diyerek true ise false veya tam tersi haline getirdim

//!ANCAK onClick event'ini vereceğim yer önemli doğruca img'ye versem sadece tıklayınca resim değişiyor geriye dönmüyor. ancak bunu ya col yada card'a verince toggle çalışıyor

// taşıyıcıya vererek tek bir noktaya verdi.child'lara verseydik kod kalabalığı olacaktı.mesela card header'a verecektik title verecektik