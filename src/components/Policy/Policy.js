import React from 'react'
import {PolicyContainer,PolicyHeading,PolicyImage,PolicyList} from './Policy.styles';
const Policy = () => {
    return (
        <PolicyContainer>
            <PolicyImage />
            <PolicyHeading>GİZLİLİK POLİTİKASI</PolicyHeading>
            <h3>GİZLİLİK İLKELERİ</h3>
            <div>Mayadem ürünlerini kullanımınız sırasında kişisel gizliliğinizin sağlanmasına önem vermekteyiz.</div>
            <div>Uygulamalarımızı indirmeniz, kullanmanız için kişisel bilgilerinize ihtiyaç yoktur.</div>
            <div>Uygulama mağaza platformlarından ürünlerimize ulaşabilirsiniz.</div>
            <div>Uygulamalarımızı kullanırken ayrıca kişisel bilgi toplanmaz.</div>

            <h4>1. Bültenlerimiz</h4>
            <div>Güncel kampanyalardan, yeni çıkan uygulamalardan haberdar olmak isterseniz <i><a href='www.mayadem.com/blog'>www.mayadem.com/blog</a></i> adresinden ya da</div>
            <div>doğrudan uygulamalarımız üzerinden e-posta adresinizi bırakarak abone olabilirsiniz.</div>
            <div>Paylaşmak isteyeceğiniz her türlü bilgi hizmetlerimizin kalitesini ve performansını arttırmak için kullanılacaktır.</div>
            
            <h5>Hangi Tür Bilgi Toplanmaktadır?</h5>
            <div>Bize Ulaştırdığınız Kişisel Bilgiler;</div>
            <div>Hizmetleri kullandığınız sırada, bize sizi tanıtacak bazı kişisel bilgiler (sizi tanımlamak ya da sizinle iletişime geçmek için</div>
            <div>kullanılan bilgiler ve Hizmetlerin ve ilişkili diğer hizmetler ile ilgili kullandığınız ve tarafınızdan kullanılması muhtemel olan</div>
            <div>bilgiler) vermenizi isteyebiliriz. Kişisel Bilgiler, Hizmetleri kullanım sürecinde bize ilettiğiniz tercihleriniz ya da ilgi alanlarınız gibi</div>
            <div>başka bilgileri de içerebilir.</div>
            <div>E-posta listemizden çıkmak istediğinizde e-posta içerisindeki ilgili linke basmanız ve onaylamanız ya da <i><a href='mailto:iletisim@mayadem.com'>iletisim@mayadem.com</a></i></div>
            <div>adresine e-posta göndermeniz yeterli olacaktır.</div>   

            <h4>2. Teknik Destek</h4>  
            <div>Hizmetlerimiz hakkında her hangi bir soru sormak, bilgi almak isterseniz <i><a href='mailto:iletisim@mayadem.com'>iletisim@mayadem.com</a></i> adresine e-posta iletebilirsiniz.</div>   
            <div>Bu adres sadece sorularınıza cevap vermek amacıyla kullanılacaktır.</div> 
            
            <PolicyList>E-posta adresiniz aşağıdaki durumlar dışında 3. Şahıslarla paylaşılmaz.
                <li>E-posta servis sağlayıcımız.</li>
                <li>Birleşme ya da şirket satışı. Bu durumda öncelikli olarak sizi bilgilendiririz.</li>
                <li>Yasal zorunluluklar; İdari kurum ve yasalar çerçevesinde bilgi talep etme hakkına haiz olan kurumlar ile kişisel ve kişisel</li>
                <div>olmayan bilgileriniz paylaşılmak durumundadır.</div>
            </PolicyList>
            
            <div>Gizlilik politikamızı değiştirebiliriz.</div> 
            <div>Böyle bir durumda size e-posta aracılığı ile bilgilendiririz.</div> 
            <div>Bu gizlilik politikası ile ilgili herhangi bir sorunuz olursa <i><a href='mailto:iletisim@mayadem.com'>iletisim@mayadem.com</a></i> adresinden bize ulaşabilirsiniz.</div>    
             <br/>
             <br/>   
             <br/>

        </PolicyContainer>
    )
}

export default Policy
