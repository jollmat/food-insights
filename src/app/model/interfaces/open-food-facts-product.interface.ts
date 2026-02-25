export interface OpenFoodFactsProduct {
    _id:                                                                               string;
    _keywords?:                                                                         string[];
    added_countries_tags?:                                                              any[];
    additives_n?:                                                                       number;
    additives_original_tags?:                                                           string[];
    additives_tags?:                                                                    string[];
    allergens?:                                                                         string;
    allergens_from_ingredients?:                                                        string;
    allergens_from_user?:                                                               string;
    allergens_hierarchy?:                                                               string[];
    allergens_lc?:                                                                      string;
    allergens_tags?:                                                                    string[];
    amino_acids_prev_tags?:                                                             any[];
    amino_acids_tags?:                                                                  any[];
    brands?:                                                                            string;
    brands_old?:                                                                        string;
    brands_tags?:                                                                       string[];
    carbon_footprint_from_known_ingredients_debug?:                                     string;
    carbon_footprint_percent_of_known_ingredients?:                                     number;
    categories?:                                                                        string;
    categories_hierarchy?:                                                              string[];
    categories_lc?:                                                                     string;
    categories_old?:                                                                    string;
    categories_properties?:                                                             CategoriesProperties;
    categories_properties_tags?:                                                        string[];
    categories_tags?:                                                                   string[];
    category_properties?:                                                               CategoryProperties;
    checkers_tags?:                                                                     any[];
    ciqual_food_name_tags?:                                                             string[];
    cities_tags?:                                                                       any[];
    code?:                                                                              string;
    codes_tags?:                                                                        string[];
    compared_to_category?:                                                              string;
    complete?:                                                                          number;
    completeness?:                                                                      number;
    correctors_tags?:                                                                   string[];
    countries?:                                                                         string;
    countries_beforescanbot?:                                                           string;
    countries_hierarchy?:                                                               string[];
    countries_lc?:                                                                      string;
    countries_tags?:                                                                    string[];
    created_t?:                                                                         number;
    creator?:                                                                           string;
    data_quality_bugs_tags?:                                                            any[];
    data_quality_errors_tags?:                                                          any[];
    data_quality_info_tags?:                                                            string[];
    data_quality_tags?:                                                                 string[];
    data_quality_warnings_tags?:                                                        string[];
    data_quality_dimensions?:                                                           any;
    data_quality_completeness_tags?:                                                    any[];
    data_sources?:                                                                      string;
    data_sources_tags?:                                                                 string[];
    debug_param_sorted_langs?:                                                          string[];
    ecoscore_data?:                                                                     EcoscoreData;
    ecoscore_grade?:                                                                    EcoscoreGrade;
    ecoscore_score?:                                                                    number;
    ecoscore_tags?:                                                                     EcoscoreGrade[];
    editors_tags?:                                                                      string[];
    emb_codes?:                                                                         string;
    emb_codes_orig?:                                                                    string;
    emb_codes_tags?:                                                                    any[];
    entry_dates_tags?:                                                                  string[];
    environment_impact_level?:                                                          string;
    environment_impact_level_tags?:                                                     any[];
    expiration_date?:                                                                   string;
    food_groups?:                                                                       string;
    food_groups_tags?:                                                                  string[];
    "fruits-vegetables-nuts_100g_estimate"?:                                            number;
    generic_name?:                                                                      string;
    generic_name_bg?:                                                                   string;
    generic_name_es?:                                                                   string;
    generic_name_fr?:                                                                   string;
    id?:                                                                                string;
    image_front_small_url?:                                                             string;
    image_front_thumb_url?:                                                             string;
    image_front_url?:                                                                   string;
    image_nutrition_small_url?:                                                         string;
    image_nutrition_thumb_url?:                                                         string;
    image_nutrition_url?:                                                               string;
    image_small_url?:                                                                   string;
    image_thumb_url?:                                                                   string;
    image_url?:                                                                         string;
    images?:                                                                            Images;
    informers_tags?:                                                                    string[];
    ingredients?:                                                                       Ingredient[];
    ingredients_analysis?:                                                              CategoryProperties;
    ingredients_analysis_tags?:                                                         string[];
    ingredients_debug?:                                                                 Array<null | string>;
    ingredients_from_or_that_may_be_from_palm_oil_n?:                                   number;
    ingredients_from_palm_oil_n?:                                                       number;
    ingredients_from_palm_oil_tags?:                                                    any[];
    ingredients_hierarchy?:                                                             string[];
    ingredients_ids_debug?:                                                             string[];
    ingredients_lc?:                                                                    string;
    ingredients_n?:                                                                     number;
    ingredients_n_tags?:                                                                string[];
    ingredients_non_nutritive_sweeteners_n?:                                            number;
    ingredients_original_tags?:                                                         string[];
    ingredients_percent_analysis?:                                                      number;
    ingredients_sweeteners_n?:                                                          number;
    ingredients_tags?:                                                                  string[];
    ingredients_text?:                                                                  string;
    ingredients_text_bg?:                                                               string;
    ingredients_text_debug?:                                                            string;
    ingredients_text_debug_tags?:                                                       string[];
    ingredients_text_ar?:                                                               string;
    ingredients_text_es?:                                                               string;
    ingredients_text_en?:                                                               string;
    ingredients_text_fr?:                                                               string;
    ingredients_text_hu?:                                                               string;
    ingredients_text_pt?:                                                               string;
    ingredients_text_fr_ocr_1543475309?:                                                string;
    ingredients_text_fr_ocr_1543475309_result?:                                         string;
    ingredients_text_fr_ocr_1545424194?:                                                string;
    ingredients_text_fr_ocr_1545424194_result?:                                         string;
    ingredients_text_with_allergens?:                                                   string;
    ingredients_text_with_allergens_bg?:                                                string;
    ingredients_text_with_allergens_es?:                                                string;
    ingredients_text_with_allergens_en?:                                                string;
    ingredients_text_with_allergens_fr?:                                                string;
    ingredients_text_with_allergens_pt?:                                                string;
    ingredients_that_may_be_from_palm_oil_n?:                                           number;
    ingredients_that_may_be_from_palm_oil_tags?:                                        any[];
    ingredients_with_specified_percent_n?:                                              number;
    ingredients_with_specified_percent_sum?:                                            number;
    ingredients_with_unspecified_percent_n?:                                            number;
    ingredients_with_unspecified_percent_sum?:                                          number;
    ingredients_without_ciqual_codes?:                                                  string[];
    ingredients_without_ciqual_codes_n?:                                                number;
    ingredients_without_ecobalyse_ids?:                                                 string[];
    ingredients_without_ecobalyse_ids_n?:                                               number;
    interface_version_created?:                                                         string;
    interface_version_modified?:                                                        string;
    known_ingredients_n?:                                                               number;
    labels?:                                                                            string;
    labels_hierarchy?:                                                                  string[];
    labels_lc?:                                                                         string;
    labels_old?:                                                                        string;
    labels_tags?:                                                                       string[];
    lang?:                                                                              string;
    languages?:                                                                         Languages;
    languages_codes?:                                                                   LanguagesCodes;
    languages_hierarchy?:                                                               string[];
    languages_tags?:                                                                    string[];
    last_edit_dates_tags?:                                                              string[];
    last_editor?:                                                                       string;
    last_image_dates_tags?:                                                             string[];
    last_image_t?:                                                                      number;
    last_modified_by?:                                                                  string;
    last_modified_t?:                                                                   number;
    last_updated_t?:                                                                    number;
    lc?:                                                                                string;
    link?:                                                                              string;
    main_countries_tags?:                                                               any[];
    manufacturing_places?:                                                              string;
    manufacturing_places_tags?:                                                         any[];
    max_imgid?:                                                                         string;
    minerals_prev_tags?:                                                                any[];
    minerals_tags?:                                                                     any[];
    misc_tags?:                                                                         string[];
    no_nutrition_data?:                                                                 string;
    nova_group?:                                                                        number;
    nova_group_debug?:                                                                  string;
    nova_groups?:                                                                       string;
    nova_groups_markers?:                                                               { [key: string]: Array<string[]> };
    nova_groups_tags?:                                                                  string[];
    nucleotides_prev_tags?:                                                             any[];
    nucleotides_tags?:                                                                  any[];
    nutrient_levels?:                                                                   NutrientLevels;
    nutrient_levels_tags?:                                                              string[];
    nutriments?:                                                                        Nutriments;
    nutriscore?:                                                                        { [key: string]: Nutriscore };
    nutriscore_2021_tags?:                                                              string[];
    nutriscore_2023_tags?:                                                              EcoscoreGrade[];
    nutriscore_data?:                                                                   NutriscoreData;
    nutriscore_grade?:                                                                  EcoscoreGrade;
    nutriscore_score?:                                                                  number;
    nutriscore_score_opposite?:                                                         number;
    nutriscore_tags?:                                                                   EcoscoreGrade[];
    nutriscore_version?:                                                                string;
    nutrition_data?:                                                                    string;
    nutrition_data_per?:                                                                string;
    nutrition_data_prepared?:                                                           string;
    nutrition_data_prepared_per?:                                                       string;
    nutrition_grade_fr?:                                                                EcoscoreGrade;
    nutrition_grades?:                                                                  EcoscoreGrade;
    nutrition_grades_tags?:                                                             EcoscoreGrade[];
    nutrition_score_beverage?:                                                          number;
    nutrition_score_debug?:                                                             string;
    nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients?:       number;
    nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients_value?: number;
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients?:          number;
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value?:    number;
    obsolete?:                                                                          string;
    obsolete_since_date?:                                                               string;
    origin?:                                                                            string;
    origin_bg?:                                                                         string;
    origin_es?:                                                                         string;
    origin_fr?:                                                                         string;
    origin_ar?:                                                                         string;
    origin_en?:                                                                         string;
    origin_hu?:                                                                         string;
    origin_pt?:                                                                         string;
    origins?:                                                                           string;
    origins_hierarchy?:                                                                 any[];
    origins_lc?:                                                                        string;
    origins_old?:                                                                       string;
    origins_tags?:                                                                      any[];
    other_nutritional_substances_tags?:                                                 any[];
    packaging?:                                                                         string;
    packaging_hierarchy?:                                                               string[];
    packaging_lc?:                                                                      string;
    packaging_materials_tags?:                                                          string[];
    packaging_old?:                                                                     string;
    packaging_old_before_taxonomization?:                                               string;
    packaging_recycling_tags?:                                                          string[];
    packaging_shapes_tags?:                                                             string[];
    packaging_tags?:                                                                    string[];
    packaging_text?:                                                                    string;
    packaging_text_ar?:                                                                 string;
    packaging_text_en?:                                                                 string;
    packaging_text_fr?:                                                                 string;
    packaging_text_hu?:                                                                 string;
    packaging_text_pt?:                                                                 string;
    packaging_text_bg?:                                                                 string;
    packaging_text_es?:                                                                 string;
    packagings?:                                                                        OpenFoodFactsProductPackaging[];
    packagings_complete?:                                                               number;
    packagings_materials?:                                                              PackagingsMaterials;
    packagings_n?:                                                                      number;
    photographers_tags?:                                                                string[];
    pnns_groups_1?:                                                                     string;
    pnns_groups_1_tags?:                                                                string[];
    pnns_groups_2?:                                                                     string;
    pnns_groups_2_tags?:                                                                string[];
    popularity_key?:                                                                    number;
    popularity_tags?:                                                                   string[];
    product?:                                                                           CategoryProperties;
    product_name?:                                                                      string;
    product_name_bg?:                                                                   string;
    product_name_ar?:                                                                   string;
    product_name_en?:                                                                   string;
    product_name_hu?:                                                                   string;
    product_name_pt?:                                                                   string;
    product_name_es?:                                                                   string;
    product_name_fr?:                                                                   string;
    product_quantity?:                                                                  string;
    product_quantity_unit?:                                                             Unit;
    product_type?:                                                                      string;
    purchase_places?:                                                                   string;
    purchase_places_tags?:                                                              any[];
    quantity?:                                                                          string;
    removed_countries_tags?:                                                            any[];
    rev?:                                                                               number;
    scans_n?:                                                                           number;
    schema_version?:                                                                    number;
    selected_images?:                                                                   SelectedImages;
    serving_quantity?:                                                                  number;
    serving_quantity_unit?:                                                             Unit;
    serving_size?:                                                                      string;
    sortkey?:                                                                           number;
    states?:                                                                            string;
    states_hierarchy?:                                                                  string[];
    states_tags?:                                                                       string[];
    stores?:                                                                            string;
    stores_tags?:                                                                       any[];
    teams?:                                                                             string;
    teams_tags?:                                                                        string[];
    traces?:                                                                            string;
    traces_from_ingredients?:                                                           string;
    traces_from_user?:                                                                  string;
    traces_hierarchy?:                                                                  string[];
    traces_lc?:                                                                         string;
    traces_tags?:                                                                       string[];
    unique_scans_n?:                                                                    number;
    unknown_ingredients_n?:                                                             number;
    unknown_nutrients_tags?:                                                            any[];
    update_key?:                                                                        string;
    vitamins_prev_tags?:                                                                any[];
    vitamins_tags?:                                                                     any[];
    weighers_tags?:                                                                     any[];
}

export interface CategoriesProperties {
    "agribalyse_proxy_food_code?:en"?: string;
}

export interface CategoryProperties {
}

export interface EcoscoreData {
    adjustments?:          Adjustments;
    agribalyse?:           Agribalyse;
    grade?:                EcoscoreGrade;
    grades?:               { [key: string]: EcoscoreGrade };
    missing?:              Missing;
    missing_data_warning?: number;
    score?:                number;
    scores?:               { [key: string]: number };
    status?:               string;
}

export interface Adjustments {
    origins_of_ingredients?: OriginsOfIngredients;
    packaging?:              AdjustmentsPackaging;
    production_system?:      ProductionSystem;
    threatened_species?:     CategoryProperties;
}

export interface OriginsOfIngredients {
    aggregated_origins?:         AggregatedOrigin[];
    epi_score?:                  number;
    epi_value?:                  number;
    origins_from_categories?:    string[];
    origins_from_origins_field?: string[];
    transportation_score?:       number;
    transportation_scores?:      { [key: string]: number };
    transportation_value?:       number;
    transportation_values?:      { [key: string]: number };
    value?:                      number;
    values?:                     { [key: string]: number };
    warning?:                    string;
}

export interface AggregatedOrigin {
    epi_score?:            number;
    origin?:               string;
    percent?:              number;
    transportation_score?: number;
}

export interface AdjustmentsPackaging {
    non_recyclable_and_non_biodegradable_materials?: number;
    packagings?:                                     PackagingPackaging[];
    score?:                                          number;
    value?:                                          number;
}

export interface PackagingPackaging {
    environmental_score_material_score?:    number;
    environmental_score_shape_ratio?:       number;
    material?:                              string;
    number_of_units?:                       number;
    recycling?:                             string;
    shape?:                                 string;
    non_recyclable_and_non_biodegradable?: Vegan;
}

export enum Vegan {
    Maybe = "maybe",
    Yes = "yes",
}

export interface ProductionSystem {
    labels?:  any[];
    value?:   number;
    warning?: string;
}

export interface Agribalyse {
    agribalyse_proxy_food_code?: string;
    co2_agriculture?:            number;
    co2_consumption?:            number;
    co2_distribution?:           number;
    co2_packaging?:              number;
    co2_processing?:             number;
    co2_total?:                  number;
    co2_transportation?:         number;
    code?:                       string;
    dqr?:                        string;
    ef_agriculture?:             number;
    ef_consumption?:             number;
    ef_distribution?:            number;
    ef_packaging?:               number;
    ef_processing?:              number;
    ef_total?:                   number;
    ef_transportation?:          number;
    is_beverage?:                number;
    name_en?:                    string;
    name_fr?:                    string;
    score?:                      number;
    version?:                    string;
}

export enum EcoscoreGrade {
    A = "a",
    B = "b",
    C = "c",
    D = "d",
    E = "e",
    UNKOWN = "unknown"
}

export interface Missing {
    labels?:  number;
    origins?: number;
}

export interface Images {
    "1"?:          The1;
    "2"?:          The1;
    "3"?:          The1;
    "4"?:          The1;
    "5"?:          The10;
    "6"?:          The10;
    "7"?:          The10;
    "8"?:          The10;
    "9"?:          The10;
    "10"?:         The10;
    "11"?:         The10;
    "12"?:         The10;
    "14"?:         The10;
    "15"?:         The10;
    "16"?:         The10;
    "17"?:         The10;
    "18"?:         The10;
    "19"?:         The10;
    "20"?:         The10;
    "22"?:         The10;
    "23"?:         The10;
    "24"?:         The10;
    "25"?:         The10;
    "26"?:         The10;
    "27"?:         The10;
    front_es?:     FrontEs;
    nutrition_bg?: FrontEs;
    nutrition_es?: FrontEs;
}

export interface The1 {
    sizes?:      Sizes;
    uploaded_t?: string;
    uploader?:   string;
}

export interface Sizes {
    "100"?:  The100;
    "400"?:  The100;
    full?:   The100;
    "200"?: The100;
}

export interface The100 {
    h?: number;
    w?: number;
}

export interface The10 {
    sizes?:      Sizes;
    uploaded_t?: number;
    uploader?:   Uploader;
}

export enum Uploader {
    Kiliweb = "kiliweb",
    Roto = "roto",
}

export interface FrontEs {
    angle?: number;
    imgid?:  string;
    rev?:    string;
    sizes?:  Sizes;
}

export interface Ingredient {
    ciqual_food_code?:       string;
    id?:                      string;
    is_in_taxonomy?:          number;
    percent?:                number;
    percent_estimate?:        number;
    percent_max?:             number;
    percent_min?:             number;
    text?:                    string;
    vegan?:                  Vegan;
    vegetarian?:             Vegan;
    ciqual_proxy_food_code?: string;
    ecobalyse_code?:         string;
    from_palm_oil?:          string;
    ingredients?:            Ingredient[];
}

export interface Languages {
    "en?:bulgarian"?: number;
    "en?:spanish"?:   number;
}

export interface LanguagesCodes {
    bg?: number;
    es?: number;
}

export interface NutrientLevels {
    fat?:             string;
    salt?:            string;
    "saturated-fat"?: string;
    sugars?:          string;
}

export interface Nutriments {
    carbohydrates?:                                                 number;
    carbohydrates_100g?:                                            number;
    carbohydrates_serving?:                                         number;
    carbohydrates_unit?:                                            Unit;
    carbohydrates_value?:                                           number;
    "carbon-footprint-from-known-ingredients_100g"?:                number;
    "carbon-footprint-from-known-ingredients_product"?:             number;
    "carbon-footprint-from-known-ingredients_serving"?:             number;
    energy?:                                                        number;
    "energy-kcal"?:                                                 number;
    "energy-kcal_100g"?:                                            number;
    "energy-kcal_serving"?:                                         number;
    "energy-kcal_unit"?:                                            string;
    "energy-kcal_value"?:                                           number;
    "energy-kcal_value_computed"?:                                  number;
    "energy-kj"?:                                                   number;
    "energy-kj_100g"?:                                              number;
    "energy-kj_serving"?:                                           number;
    "energy-kj_unit"?:                                              Unit;
    "energy-kj_value"?:                                             number;
    "energy-kj_value_computed"?:                                    number;
    energy_100g?:                                                   number;
    energy_serving?:                                                number;
    energy_unit?:                                                   Unit;
    energy_value?:                                                  number;
    fat?:                                                           number;
    fat_100g?:                                                      number;
    fat_serving?:                                                   number;
    fat_unit?:                                                      Unit;
    fat_value?:                                                     number;
    fiber?:                                                         number;
    fiber_100g?:                                                    number;
    fiber_serving?:                                                 number;
    fiber_unit?:                                                    Unit;
    fiber_value?:                                                   number;
    "fruits-vegetables-legumes-estimate-from-ingredients_100g"?:    number;
    "fruits-vegetables-legumes-estimate-from-ingredients_serving"?: number;
    "fruits-vegetables-nuts-estimate-from-ingredients_100g"?:       number;
    "fruits-vegetables-nuts-estimate-from-ingredients_serving"?:    number;
    "monounsaturated-fat"?:                                         number;
    "monounsaturated-fat_100g"?:                                    number;
    "monounsaturated-fat_label"?:                                   string;
    "monounsaturated-fat_serving"?:                                 number;
    "monounsaturated-fat_unit"?:                                    Unit;
    "monounsaturated-fat_value"?:                                   number;
    "nova-group"?:                                                  number;
    "nova-group_100g"?:                                             number;
    "nova-group_serving"?:                                          number;
    "nutrition-score-fr"?:                                          number;
    "nutrition-score-fr_100g"?:                                     number;
    polyols?:                                                       number;
    polyols_100g?:                                                  number;
    polyols_label?:                                                 string;
    polyols_serving?:                                               number;
    polyols_unit?:                                                  Unit;
    polyols_value?:                                                 number;
    "polyunsaturated-fat"?:                                         number;
    "polyunsaturated-fat_100g"?:                                    number;
    "polyunsaturated-fat_label"?:                                   string;
    "polyunsaturated-fat_serving"?:                                 number;
    "polyunsaturated-fat_unit"?:                                    Unit;
    "polyunsaturated-fat_value"?:                                   number;
    proteins?:                                                      number;
    proteins_100g?:                                                 number;
    proteins_serving?:                                              number;
    proteins_unit?:                                                 Unit;
    proteins_value?:                                                number;
    salt?:                                                          number;
    salt_100g?:                                                     number;
    salt_serving?:                                                  number;
    salt_unit?:                                                     Unit;
    salt_value?:                                                    number;
    "saturated-fat"?:                                               number;
    "saturated-fat_100g"?:                                          number;
    "saturated-fat_serving"?:                                       number;
    "saturated-fat_unit"?:                                          Unit;
    "saturated-fat_value"?:                                         number;
    sodium?:                                                        number;
    sodium_100g?:                                                   number;
    sodium_serving?:                                                number;
    sodium_unit?:                                                   Unit;
    sodium_value?:                                                  number;
    starch?:                                                        number;
    starch_100g?:                                                   number;
    starch_label?:                                                  string;
    starch_serving?:                                                number;
    starch_unit?:                                                   Unit;
    starch_value?:                                                  number;
    sugars?:                                                        number;
    sugars_100g?:                                                   number;
    sugars_serving?:                                                number;
    sugars_unit?:                                                   Unit;
    sugars_value?:                                                  number;
}

export enum Unit {
    Empty = "%",
    G = "g",
    KJ = "kJ",
}

export interface Nutriscore {
    category_available?:    number;
    data?:                  Data;
    grade?:                 string;
    nutrients_available?:   number;
    nutriscore_applicable?: number;
    nutriscore_computed?:   number;
    score?:                 number;
}

export interface Data {
    energy?:                                                number;
    energy_points?:                                         number;
    energy_value?:                                          number;
    fiber?:                                                 number;
    fiber_points?:                                          number;
    fiber_value?:                                           number;
    fruits_vegetables_nuts_colza_walnut_olive_oils?:        number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_points?: number;
    fruits_vegetables_nuts_colza_walnut_olive_oils_value?:  number;
    is_beverage?:                                            number;
    is_cheese?:                                              number;
    is_fat?:                                                number;
    is_water?:                                               number;
    negative_points?:                                        number;
    positive_points?:                                        number;
    proteins?:                                              number;
    proteins_points?:                                       number;
    proteins_value?:                                        number;
    saturated_fat?:                                         number;
    saturated_fat_points?:                                  number;
    saturated_fat_value?:                                   number;
    sodium?:                                                number;
    sodium_points?:                                         number;
    sodium_value?:                                          number;
    sugars?:                                                number;
    sugars_points?:                                         number;
    sugars_value?:                                          number;
    components?:                                            Components;
    count_proteins?:                                        number;
    count_proteins_reason?:                                 string;
    is_fat_oil_nuts_seeds?:                                 number;
    is_red_meat_product?:                                   number;
    negative_points_max?:                                   number;
    positive_nutrients?:                                    string[];
    positive_points_max?:                                   number;
    grade?:                                                 EcoscoreGrade;
    score?:                                                 number;
}

export interface Components {
    negative?: Tive[];
    positive?: Tive[];
}

export interface Tive {
    id?:         string;
    points?:     number;
    points_max?: number;
    unit?:       Unit;
    value?:      number;
}

export interface NutriscoreData {
    components?:            Components;
    count_proteins?:        number;
    count_proteins_reason?: string;
    is_beverage?:           number;
    is_cheese?:             number;
    is_fat_oil_nuts_seeds?: number;
    is_red_meat_product?:   number;
    is_water?:              number;
    negative_points?:       number;
    negative_points_max?:   number;
    positive_nutrients?:    string[];
    positive_points?:       number;
    positive_points_max?:   number;
    grade?:                EcoscoreGrade;
    score?:                number;
}

export interface OpenFoodFactsProductPackaging {
    material?:        string;
    number_of_units?: number;
    recycling?:       string;
    shape?:           string;
}

export interface PackagingsMaterials {
    all?:                     CategoryProperties;
    "en:paper-or-cardboard"?: CategoryProperties;
    "en:plastic"?:            CategoryProperties;
}

export interface SelectedImages {
    front?:     Front;
    nutrition?: Nutrition;
}

export interface Front {
    display?: FrontDisplay;
    small?:   FrontDisplay;
    thumb?:   FrontDisplay;
}

export interface FrontDisplay {
    es?: string;
}

export interface Nutrition {
    display?: NutritionDisplay;
    small?:   NutritionDisplay;
    thumb?:   NutritionDisplay;
}

export interface NutritionDisplay {
    bg?: string;
    es?: string;
}
