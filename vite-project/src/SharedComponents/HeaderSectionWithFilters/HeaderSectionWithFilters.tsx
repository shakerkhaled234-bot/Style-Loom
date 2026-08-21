    import React from "react";

    type Filter = { label: string; value: string };

    type HeaderSectionWithFiltersProps = {
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
    filters?: Filter[];
    activeFilter?: string;
    onFilterChange?: (value: string) => void;
    };

    /**
     * HeaderSectionWithFilters
     *
     * Usage:
     * <HeaderSectionWithFilters
     *   title="Our Collection"
     *   description="Browse our latest styles."
     *   image="/hero.png"
     *   filters={[
     *     { label: "All", value: "all" },
     *     { label: "New", value: "new" },
     *   ]}
     *   activeFilter={activeFilter}
     *   onFilterChange={(value) => setActiveFilter(value)}
     * />
     */
    const HeaderSectionWithFilters: React.FC<HeaderSectionWithFiltersProps> = ({
    title,
    description,
    image,
    imageAlt = "",
    filters = [],
    activeFilter,
    onFilterChange,
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

            {/* Filter buttons — hidden when filters array is empty */}
            {filters.length > 0 && (
                <div className="-mx-5 mt-8 flex gap-2.5 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
                {filters.map((filter) => {
                    const isActive = filter.value === activeFilter;
                    return (
                    <button
                        key={filter.value}
                        type="button"
                        onClick={() => onFilterChange?.(filter.value)}
                        className={`shrink-0 whitespace-nowrap rounded-lg border border-dashed px-6 py-3.5 text-center font-['Roboto_Mono'] text-lg leading-[150%] transition-colors ${
                        isActive
                            ? "border-[#C2B4A3] bg-[#C2B4A3] text-[#0F0F0F]"
                            : "border-[#333333] text-[#B3B3B2] hover:border-[#C2B4A3] hover:text-[#C2B4A3]"
                        }`}
                    >
                        {filter.label}
                    </button>
                    );
                })}
                </div>
            )}
            </div>

            {/* Decorative image — hidden on mobile */}
            {image && (
            <img
                src={image}
                alt={imageAlt}
                className="hidden shrink-0 object-cover object-left md:-mr-10 md:block md:h-auto max-w-md"
            />
            )}

        </section>
        </div>
    );
    };

    export default HeaderSectionWithFilters;