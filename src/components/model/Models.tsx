export interface ArtWorkData {
    pagination: Pagination[],
    data: ArtData[],
    info: Info,
    config: Config
}

export interface ExhibitionData {
    pagination: Pagination[],
    data: Exhibition[],
    info: Info,
    config: Config
}

export interface EventsData {
    pagination: Pagination[],
    data: Events[],
    info: Info,
    config: Config
}

export interface VideosData {
    pagination: Pagination[],
    data: Videos[],
    info: Info,
    config: Config
}

export interface HighlightsData {
    pagination: Pagination[],
    data: Highlight[],
    info: Info,
    config: Config
}

export interface ArtistsData {
    pagination: Pagination[],
    data: Artists[],
    info: Info,
    config: Config    
}

export interface ProductData{
    pagination: Pagination[],
    data: Product[],
    info: Info,
    config: Config      
}

export interface Pagination {
    total: number,
    limit: number,
    offset: number,
    total_pages: number,
    current_page: number,
    next_url: string
}

export interface ArtData {
    id: number,
    api_model: string,
    api_link: string,
    is_boosted: boolean,
    title: string,
    alt_titles: string,
    thumbnail: Thumbnail,
    main_reference_number: number,
    has_not_been_viewed_much: boolean,
    boost_rank: number,
    date_start: number,
    date_end: number,
    date_display: number,
    date_qualifier_title: string,
    date_qualifier_id: string,
    artist_display: string,
    place_of_origin: string,
    description: string,
    dimensions: string,
    dimensions_detail: Dimension_Detail[],
    medium_display: string,
    inscriptions: string,
    credit_line: string,
    catalogue_display: string,
    publication_history: string,
    exhibition_history: string,
    provenance_text: string,
    edition: string,
    publishing_verification_level: string,
    internal_department_id: number,
    fiscal_year: number,
    fiscal_year_deaccession: string,
    is_public_domain: boolean,
    is_zoomable: boolean,
    max_zoom_window_size: number,
    copyright_notice: string,
    has_multimedia_resources: boolean,
    has_educational_resources: boolean,
    has_advanced_imaging: boolean,
    colorfulness: number,
    color: Color[],
    latitude: number,
    longitude: number,
    latlon: number,
    is_on_view: boolean,
    on_loan_display: string,
    gallery_title: string,
    gallery_id: string,
    nomisma_id: string,
    artwork_type_title: string,
    artwork_type_id: number,
    department_title: string,
    department_id: string,
    artist_id: number,
    artist_title: string,
    alt_artist_ids: string[],
    artist_ids: number[],
    artist_titles: string[],
    category_ids: string[],
    category_titles: string[],
    term_titles: string[],
    style_id: string,
    style_title: string,
    alt_style_ids: [],
    style_ids: [],
    style_titles: [],
    classification_id: string,
    classification_title: string,
    alt_classification_ids: string[],
    classification_ids: string[],
    classification_titles: string[],
    subject_id: string,
    alt_subject_ids: [],
    subject_ids: [],
    subject_titles: [],
    material_id: string,
    alt_material_ids: string[],
    material_ids: string[],
    material_titles: string[],
    technique_id: string,
    alt_technique_ids: [],
    technique_ids: [],
    technique_titles: [],
    theme_titles: [],
    image_id: string,
    alt_image_ids: [],
    document_ids: [],
    sound_ids: [],
    video_ids: [],
    text_ids: [],
    section_ids: [],
    section_titles: [],
    site_ids: [],
    suggest_autocomplete_all: SuggestAutoComplete[][][],
    source_updated_at: string,
    updated_at: string,
    timestamp: string
}

export interface Thumbnail {
    lqip: string,
    data: string,
    width: number,
    height: number,
    alt_text: string
}

export interface Dimension_Detail {
    depth_cm: number,
    depth_in: number,
    width_cm: number,
    width_in: number,
    height_cm: number,
    height_in: number,
    diameter_cm: number,
    diameter_in: number,
    clarification: string
}

export interface Color {
    h: number,
    l: number,
    s: number,
    percentage: number,
    population: number
}

export interface SuggestAutoComplete {
    input: number[],
    weight: number,
    contexts: Contexts[]
}

export interface Contexts {
    groupings: string[]
}

export interface Exhibition {
    id: number,
    api_model: string,
    api_link: string,
    title: string,
    is_featured: boolean,
    position: number,
    short_description: string,
    web_url: string,
    image_url: string,
    status: string,
    aic_start_at: string,
    aic_end_at: string,
    gallery_id: number,
    gallery_title: string,
    artwork_ids: number[],
    artwork_titles: string[],
    artist_ids: number[],
    site_ids: string[],
    image_id: string,
    alt_image_ids: string[],
    document_ids: string[],
    suggest_autocomplete_all: SuggestAutoComplete[][][],
    source_updated_at: string,
    updated_at: string,
    timestamp: string
}

export interface Info {
    license_text: string,
    license_links: string[],
    version: number
}

export interface Config {
    iiif_url: string,
    website_url: string
}

export interface Events {
    id: number,
    api_model: string,
    api_link: string,
    title: string,
    title_display: string,
    image_url: string,
    hero_caption: string,
    short_description: string,
    header_description: string,
    list_description: string,
    description: string,
    location: string,
    event_type_id: number,
    alt_event_type_ids: number[],
    audience_id: 3,
    alt_audience_ids: number[],
    program_ids: number[],
    program_titles: string[],
    is_ticketed: boolean,
    ticketed_event_id: number,
    rsvp_link: string,
    buy_button_text: string,
    buy_button_caption: string,
    is_registration_required: boolean,
    is_member_exclusive: boolean,
    is_sold_out: boolean,
    is_free: boolean,
    is_private: boolean,
    is_admission_required: boolean,
    is_after_hours: boolean,
    is_virtual_event: boolean,
    virtual_event_url: string,
    virtual_event_passcode: string,
    start_date: string,
    end_date: string,
    start_time: string,
    end_time: string,
    date_display: boolean,
    door_time: string,
    layout_type: number,
    slug: string,
    entrance: string,
    join_url: string,
    survey_url: string,
    event_host_id: number,
    event_host_title: string,
    search_tags: string,
    source_updated_at: string,
    updated_at: string,
    timestamp: string
}

export interface Videos {
    id: string,
    lake_guid: string,
    api_model: string,
    api_link: string,
    title: string,
    type: string,
    alt_text: string,
    content: string,
    is_multimedia_resource: boolean,
    is_educational_resource: boolean,
    is_teacher_resource: boolean,
    credit_line: string,
    content_e_tag: string,
    artwork_ids: number[],
    artwork_titles: string[],
    source_updated_at: string,
    updated_at: string,
    timestamp: string
}

export interface Highlight {
    id: number,
    api_model: string,
    api_link: string,
    title: string,
    copy: string,
    source_updated_at: string,
    updated_at: string,
    timestamp: string
}

export interface Artists {
    id: number,
    api_model: string,
    api_link: string,
    title: string,
    sort_title: string,
    alt_titles: string[],
    is_artist: boolean,
    birth_date: number,
    death_date: string,
    description: string,
    ulan_id: string,
    suggest_autocomplete_all: SuggestAutoComplete[],
    source_updated_at: string,
    updated_at: string,
    timestamp: string   
}

export interface Product {
    id: number,
    api_model: string,
    api_link: string,
    title: string,
    external_sku: number,
    image_url: string,
    web_url: string,
    description: string,
    price_display: string,
    min_compare_at_price: number,
    max_compare_at_price: number,
    min_current_price: number,
    max_current_price: number,
    artist_ids: number[],
    artwork_ids: [],
    exhibition_ids: [],
    source_updated_at: string,
    updated_at: string,
    timestamp: string
}