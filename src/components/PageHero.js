import "./PageHero.css";

/*
 * The top of every page. It sits under the transparent navbar.
 *   • With `image`: full photograph + neutral black scrim (home, About)
 *   • Without:      Plum brand band (all other pages)
 * `size`: "full" (home, full screen) · "page" (default) · "compact" (legal pages)
 * Children are rendered as the hero's action buttons.
 */
function PageHero({
  id,
  kicker,
  title,
  lead,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  size = "page",
  className = "",
  children,
}) {
  const isPhoto = Boolean(image);
  const classes = [
    "page-hero",
    `page-hero--${size}`,
    isPhoto ? "page-hero--photo on-photo" : "page-hero--brand section--inverse",
    className,
  ].filter(Boolean).join(" ");

  return (
    <section className={classes} aria-labelledby={id}>
      {isPhoto && (
        <>
          <img
            src={image}
            alt={imageAlt}
            className="page-hero__image"
            width={imageWidth}
            height={imageHeight}
          />
          <div className="page-hero__scrim" aria-hidden="true"></div>
        </>
      )}
      <div className="container page-hero__content">
        {kicker && <p className="page-hero__kicker">{kicker}</p>}
        <h1 id={id} className="page-hero__title">{title}</h1>
        {lead && <p className="page-hero__lead">{lead}</p>}
        {children && <div className="btn-group page-hero__actions">{children}</div>}
      </div>
    </section>
  );
}

export default PageHero;
