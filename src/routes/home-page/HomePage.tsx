import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import { useScrollPosition } from "../../utilities/hooks";
import "./homePage.scss";

const HomePage = (): JSX.Element => {
  const scrollPosition = useScrollPosition();
  const { setPage } = useContext(AppContext);
  useEffect(() => {
    setPage("home");
  }, []);

  return (
    <div className="b-home-container">
      <div className={"b-title" + (scrollPosition > 0 ? " hidden" : "")}>
        borasanuk
      </div>
      <div className={"b-masthead" + (scrollPosition > 0 ? "" : " hidden")}>
        <div
          className="b-bloom"
          style={{ position: "absolute", top: "30%", left: "5%" }}
        ></div>
        <div
          className="b-bloom"
          style={{ position: "absolute", top: "50%", right: "5%" }}
        ></div>
        <div
          className="b-bloom"
          style={{ position: "absolute", bottom: "0%", left: "40%" }}
        ></div>
        <div className="container" style={{ zIndex: 1 }}>
          <div className="col-11 col-lg-8">
            <div className="b-showcase">
              <div className="b-showcase-image-container">
                <img
                  src="https://i.ibb.co/z7GbxWc/278011989-522465269369111-4375721299295600633-n.jpg"
                  alt=""
                />
              </div>
              <div className="b-showcase-title">
                ku acm
              </div>
              <div className="b-showcase-text">
                a thorough reimagination of the club's visual identity with a
                renewed logo, design language, and website.
              </div>
            </div>
          </div>
          <div className="py-5"></div>
          <div className="row">
            <div className="ms-auto col-11 col-lg-8">
              <div className="b-showcase left-aligned inverted-colors">
                <div className="b-showcase-image-container left-aligned">
                  <img
                    src="https://i.ibb.co/vPWth7z/playground-32.png"
                    alt=""
                  />
                </div>
                <div className="b-showcase-title text-end">
                  aeon technologies
                </div>
                <div className="b-showcase-text text-end">
                  a thorough reimagination of the club's visual identity with a
                  renewed logo, design language, and website.
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="py-3"></div>
      </div>
      <div className="py-3"></div>
      <h1 className="yellow container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae
        eum unde repudiandae, vitae atque, nam, a iusto soluta dolor omnis
        adipisci aut quis cumque voluptatem sit id quos hic. Enim eligendi,
        perferendis accusantium ea sunt commodi, nobis architecto eaque sed
        possimus ad iusto nulla earum impedit molestias modi? Fuga repudiandae
        ea temporibus, animi nostrum recusandae in saepe incidunt, obcaecati
        perferendis consectetur ad doloremque officia odio illum. Rerum
        quibusdam aliquam sequi iste dolorum magni corrupti, velit ratione
        quisquam illo expedita? Placeat voluptatem porro praesentium odit,
        quidem quam quos facilis libero in hic rerum. Esse, nostrum? Commodi
        deserunt at quae quas, ducimus nisi animi autem repellat vel fugiat
        quia, exercitationem, pariatur illum itaque aperiam. Culpa soluta enim,
        aliquam exercitationem aspernatur maiores beatae esse, commodi
        consectetur officia voluptatum voluptatem. Dolor cumque totam
        perspiciatis reprehenderit est illo, architecto ducimus eos quasi
        delectus! Quaerat dignissimos blanditiis itaque doloremque excepturi
        aspernatur voluptates minima hic, aperiam distinctio, eum ducimus quis
        quisquam maiores quae perspiciatis enim quidem nihil, nulla beatae
        cumque. Eos sint rerum laboriosam, nostrum vitae, fugiat minus,
        molestiae praesentium animi voluptate facere dignissimos quaerat odit
        ducimus suscipit totam optio dolores reprehenderit incidunt dicta.
        Repellat quos, perferendis labore, expedita consectetur, cum iure
        assumenda delectus magni quia nihil dolorem velit. Tempore odit magni
        voluptatem. Dignissimos fugit voluptatem debitis neque, necessitatibus
        aspernatur pariatur cum. Porro assumenda fugit nihil facere, tempore
        aliquid cumque accusantium quasi omnis minima in nemo facilis deserunt.
        Commodi recusandae impedit minima repellat obcaecati harum architecto
        sunt eligendi vero soluta ex eos ipsam vitae corrupti beatae mollitia
        dicta laboriosam, cum eveniet! Velit rem harum quod esse doloremque sint
        quas ratione cupiditate ad perspiciatis saepe nisi nostrum itaque
        laudantium reprehenderit, similique ea repudiandae earum ab dolores
        nihil praesentium? Iusto omnis tempora atque, explicabo fuga quo facere
        rerum sapiente, perferendis nemo eaque reiciendis ullam aliquid quae
        sit. Non voluptate, optio vel quidem odio a, repellendus perspiciatis
        sunt, inventore delectus reprehenderit facilis esse placeat. Laboriosam
        nam est, possimus rerum laudantium voluptatum suscipit voluptatem
        assumenda distinctio aspernatur quaerat enim veniam quos tenetur
        perferendis culpa sed nesciunt itaque porro asperiores maxime
        consequatur deleniti cupiditate corrupti. Rerum dignissimos, ipsum animi
        omnis minus a laboriosam labore aliquam commodi aspernatur veritatis
        quo. Obcaecati neque fuga cumque optio fugiat odit quisquam earum minima
        facere minus, nostrum dolores maiores sint voluptas! Repudiandae
        expedita dolores veniam culpa odio, sequi cumque ad repellendus
        asperiores, totam iste. Ut quis est voluptas quo quia impedit quibusdam
        nemo blanditiis cum aliquam consequuntur quisquam hic laudantium,
        laborum error, asperiores repellat. Amet facilis natus blanditiis nihil
        suscipit ad. Libero, ullam. Quam temporibus ut rem sint, at aperiam eius
        autem exercitationem hic voluptas commodi excepturi assumenda harum.
        Inventore quod quidem exercitationem accusamus accusantium, architecto
        optio, sapiente veritatis sed labore quibusdam quasi enim velit adipisci
        recusandae cumque? A dolorum cum quis minus placeat fuga eligendi
        aliquid recusandae, esse sit doloribus, ut odit. Blanditiis, unde, nemo
        quisquam optio qui eius sed reiciendis eveniet, eligendi veniam cumque.
        Consequuntur, minima illum sequi quam suscipit nesciunt, laborum aliquid
        inventore omnis recusandae fugit nobis voluptates! Ad maiores neque
        voluptas nesciunt illum nobis. Quo quos, minima velit corporis explicabo
        maxime atque nisi earum culpa id, voluptate accusantium a. Animi
        incidunt soluta error ipsam, libero accusamus dolorem ducimus sunt
        accusantium a numquam fuga fugit repellat at quo maxime saepe
        repudiandae debitis? Similique magni nesciunt iure doloribus laboriosam,
        illum at, quisquam explicabo quae ex aspernatur odio fuga repellat
        voluptatum laborum corrupti corporis aliquam adipisci veritatis, non
        debitis? Officia pariatur asperiores nostrum distinctio eum, dolores
        quas neque tempore laudantium quos dignissimos quia nobis laboriosam in
        omnis natus! Officiis consequuntur facere quasi dignissimos deserunt,
        tempora omnis voluptatibus et? Velit itaque consectetur error rem sed
        harum vitae ad vel? Necessitatibus exercitationem, fugiat temporibus qui
        quis tempora sequi quisquam, officiis obcaecati incidunt officia optio?
        Assumenda a veritatis ea tenetur provident itaque facere consequatur
        omnis. Neque quos aliquid ducimus vero ea sunt, vel quaerat in, tenetur
        nemo dicta porro magni quae. Sed, sapiente excepturi quidem quos
        veritatis ipsam ratione distinctio, aspernatur recusandae praesentium
        nostrum nobis inventore totam cum nemo quasi iste unde mollitia,
        quisquam laboriosam? Alias est temporibus, eum voluptatem dolores sequi
        accusantium sint voluptas, soluta delectus doloribus quibusdam
        reiciendis commodi cum, sed neque fuga labore quae tempore eaque maiores
        nostrum blanditiis fugit nulla. Quae, nulla. Perferendis, tenetur! A
        pariatur explicabo alias, voluptas magni rerum eveniet asperiores sit ab
        earum eligendi magnam placeat optio iusto vitae inventore tempore
        maiores reiciendis numquam itaque! Illo quos suscipit possimus fuga?
        Sint sapiente commodi minus necessitatibus. Fugiat voluptatibus id
        doloribus rerum tenetur cupiditate totam, dicta nisi quod commodi sunt
        ab quo! Repellat nesciunt eveniet eaque culpa, tenetur soluta fugiat
        maxime, ratione doloribus esse facilis accusamus veniam quasi pariatur
        nam nemo aperiam temporibus! Assumenda impedit aliquid eligendi iure
        odio odit, temporibus iste! Repellat porro non, corporis reiciendis
        soluta similique magnam rem asperiores molestias quo laborum delectus ad
        excepturi! Doloribus perferendis facere maiores dolorem illum. Ad
        tempora voluptate nihil inventore qui laboriosam beatae tenetur et iure
        impedit molestias, hic ab debitis temporibus autem, nulla provident.
        Sequi qui enim saepe, dicta, non ea corrupti odio obcaecati rem fuga
        facilis similique! Natus debitis quae at, necessitatibus molestiae
        voluptatibus facilis? Voluptates vero harum numquam dicta asperiores.
        Sint, incidunt molestias qui veniam illo tempora laboriosam modi
        voluptates deleniti nemo veritatis nulla eveniet enim ducimus voluptatum
        architecto consequatur temporibus, quasi nostrum et amet? Possimus ea
        asperiores exercitationem voluptate iure impedit, minus quae error.
        Harum nobis obcaecati, veritatis nihil perspiciatis mollitia itaque
        facilis amet cumque esse sapiente impedit dicta rerum veniam odio ipsam?
        Dolore exercitationem nihil quidem similique iure ab voluptate, incidunt
        nam doloribus eius est esse necessitatibus, quas eaque! Perspiciatis
        assumenda est ducimus libero nihil possimus quia expedita magni quos
        asperiores non porro doloribus temporibus laborum deleniti culpa veniam
        eligendi voluptatum delectus tempore, officiis voluptatem omnis id
        laboriosam. Eos numquam dolorem velit voluptatem. Rem exercitationem
        pariatur veniam incidunt hic fugit nihil impedit culpa! Nisi doloremque,
        a voluptatem sint laudantium esse laborum, beatae animi tenetur dolores,
        quaerat labore possimus exercitationem repellendus accusamus nemo fugit
        architecto hic illo pariatur ipsum porro voluptates nulla. Debitis
        repellat voluptatum veritatis aliquid a, odit quidem.
      </h1>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <div className="py-5"></div>
    </div>
  );
};

export default HomePage;
