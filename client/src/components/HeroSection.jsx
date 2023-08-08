export default function HeroSection() {
  const handleScrollToParkSearch = () => {
    const parkSearchSection = document.getElementById("park-search-section");
    if (parkSearchSection) {
      parkSearchSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page-title">
      <h1 className="text">NATURE NERDS</h1>
      <h1 className="text2">
        EXPLORE THE BEAUTY OF NATIONAL PARKS <br /> WITH A LITTLE GUIDANCE FROM
        CODING NERDS
      </h1>
      <button
        id="arrow-btn"
        onClick={handleScrollToParkSearch}
        style={{ fontSize: 44 }}
      >
        {" "}
        &darr;
      </button>
    </div>
  );
}
