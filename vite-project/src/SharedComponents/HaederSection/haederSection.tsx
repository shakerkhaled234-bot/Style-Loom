
    type HeaderSectionProps = {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    };

    /**
     * HeaderSection
     *
     * Usage:
     * <HeaderSection
     *   title="Welcome"
     *   description="Discover our latest collection."
     *   image="/hero.png"
     *   imageAlt="Hero image"
     * />
     */
    const HeaderSection: React.FC<HeaderSectionProps> = ({
    title,
    description,
    image,
    imageAlt = "",
    }) => {
    return (
        // Outer padding wrapper
        <div className="px-4 md:px-20 xl:px-40">

        {/* Hero card */}
        <section className="flex items-stretch justify-between overflow-hidden rounded-2xl border-2 border-dashed border-[#262626] pr-5 pl-5 font-['Roboto'] md:pr-0 md:pl-16 xl:pl-20">

            {/* Text content */}
            <div className="flex w-full flex-col justify-center py-8 md:py-16 xl:py-20">

            {/* Title */}
            <h2 className="text-3xl font-medium text-white md:text-4xl xl:text-5xl">
                {title}
            </h2>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-neutral-400 xl:text-lg">
                {description}
            </p>

            </div>

            {/* Decorative image — hidden on mobile */}
            {image && (
            <img
                src={image}
                alt={imageAlt}
                className="hidden shrink-0 object-cover object-left md:-mr-14 md:block md:h-auto max-w-md"
            />
            )}

        </section>
        </div>
    );
    };

    export default HeaderSection;