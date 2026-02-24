// To parse this data:
//
//   import { Convert, OpenFoodFactsProduct } from "./file";
//
//   const openFoodFactsProduct = Convert.toOpenFoodFactsProduct(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface OpenFoodFactsProduct {
    _id:                                                                               string;
    _keywords:                                                                         string[];
    added_countries_tags:                                                              any[];
    additives_n:                                                                       number;
    additives_original_tags:                                                           string[];
    additives_tags:                                                                    string[];
    allergens:                                                                         string;
    allergens_from_ingredients:                                                        string;
    allergens_from_user:                                                               string;
    allergens_hierarchy:                                                               string[];
    allergens_lc:                                                                      string;
    allergens_tags:                                                                    string[];
    amino_acids_prev_tags:                                                             any[];
    amino_acids_tags:                                                                  any[];
    brands:                                                                            string;
    brands_old:                                                                        string;
    brands_tags:                                                                       string[];
    carbon_footprint_from_known_ingredients_debug:                                     string;
    carbon_footprint_percent_of_known_ingredients:                                     number;
    categories:                                                                        string;
    categories_hierarchy:                                                              string[];
    categories_lc:                                                                     string;
    categories_old:                                                                    string;
    categories_properties:                                                             CategoriesProperties;
    categories_properties_tags:                                                        string[];
    categories_tags:                                                                   string[];
    category_properties:                                                               CategoryProperties;
    checkers_tags:                                                                     any[];
    ciqual_food_name_tags:                                                             string[];
    cities_tags:                                                                       any[];
    code:                                                                              string;
    codes_tags:                                                                        string[];
    compared_to_category:                                                              string;
    complete:                                                                          number;
    completeness:                                                                      number;
    correctors_tags:                                                                   string[];
    countries:                                                                         string;
    countries_beforescanbot:                                                           string;
    countries_hierarchy:                                                               string[];
    countries_lc:                                                                      string;
    countries_tags:                                                                    string[];
    created_t:                                                                         number;
    creator:                                                                           string;
    data_quality_bugs_tags:                                                            any[];
    data_quality_errors_tags:                                                          any[];
    data_quality_info_tags:                                                            string[];
    data_quality_tags:                                                                 string[];
    data_quality_warnings_tags:                                                        string[];
    data_sources:                                                                      string;
    data_sources_tags:                                                                 string[];
    debug_param_sorted_langs:                                                          string[];
    ecoscore_data:                                                                     EcoscoreData;
    ecoscore_grade:                                                                    EcoscoreGrade;
    ecoscore_score:                                                                    number;
    ecoscore_tags:                                                                     EcoscoreGrade[];
    editors_tags:                                                                      string[];
    emb_codes:                                                                         string;
    emb_codes_orig:                                                                    string;
    emb_codes_tags:                                                                    any[];
    entry_dates_tags:                                                                  string[];
    environment_impact_level:                                                          string;
    environment_impact_level_tags:                                                     any[];
    expiration_date:                                                                   string;
    food_groups:                                                                       string;
    food_groups_tags:                                                                  string[];
    "fruits-vegetables-nuts_100g_estimate":                                            number;
    generic_name:                                                                      string;
    generic_name_bg:                                                                   string;
    generic_name_es:                                                                   string;
    generic_name_fr:                                                                   string;
    id:                                                                                string;
    image_front_small_url:                                                             string;
    image_front_thumb_url:                                                             string;
    image_front_url:                                                                   string;
    image_nutrition_small_url:                                                         string;
    image_nutrition_thumb_url:                                                         string;
    image_nutrition_url:                                                               string;
    image_small_url:                                                                   string;
    image_thumb_url:                                                                   string;
    image_url:                                                                         string;
    images:                                                                            Images;
    informers_tags:                                                                    string[];
    ingredients:                                                                       Ingredient[];
    ingredients_analysis:                                                              CategoryProperties;
    ingredients_analysis_tags:                                                         string[];
    ingredients_debug:                                                                 Array<null | string>;
    ingredients_from_or_that_may_be_from_palm_oil_n:                                   number;
    ingredients_from_palm_oil_n:                                                       number;
    ingredients_from_palm_oil_tags:                                                    any[];
    ingredients_hierarchy:                                                             string[];
    ingredients_ids_debug:                                                             string[];
    ingredients_lc:                                                                    string;
    ingredients_n:                                                                     number;
    ingredients_n_tags:                                                                string[];
    ingredients_non_nutritive_sweeteners_n:                                            number;
    ingredients_original_tags:                                                         string[];
    ingredients_percent_analysis:                                                      number;
    ingredients_sweeteners_n:                                                          number;
    ingredients_tags:                                                                  string[];
    ingredients_text:                                                                  string;
    ingredients_text_bg:                                                               string;
    ingredients_text_debug:                                                            string;
    ingredients_text_es:                                                               string;
    ingredients_text_fr:                                                               string;
    ingredients_text_with_allergens:                                                   string;
    ingredients_text_with_allergens_bg:                                                string;
    ingredients_text_with_allergens_es:                                                string;
    ingredients_that_may_be_from_palm_oil_n:                                           number;
    ingredients_that_may_be_from_palm_oil_tags:                                        any[];
    ingredients_with_specified_percent_n:                                              number;
    ingredients_with_specified_percent_sum:                                            number;
    ingredients_with_unspecified_percent_n:                                            number;
    ingredients_with_unspecified_percent_sum:                                          number;
    ingredients_without_ciqual_codes:                                                  string[];
    ingredients_without_ciqual_codes_n:                                                number;
    ingredients_without_ecobalyse_ids:                                                 string[];
    ingredients_without_ecobalyse_ids_n:                                               number;
    interface_version_created:                                                         string;
    interface_version_modified:                                                        string;
    known_ingredients_n:                                                               number;
    labels:                                                                            string;
    labels_hierarchy:                                                                  string[];
    labels_lc:                                                                         string;
    labels_old:                                                                        string;
    labels_tags:                                                                       string[];
    lang:                                                                              string;
    languages:                                                                         Languages;
    languages_codes:                                                                   LanguagesCodes;
    languages_hierarchy:                                                               string[];
    languages_tags:                                                                    string[];
    last_edit_dates_tags:                                                              string[];
    last_editor:                                                                       string;
    last_image_dates_tags:                                                             string[];
    last_image_t:                                                                      number;
    last_modified_by:                                                                  string;
    last_modified_t:                                                                   number;
    last_updated_t:                                                                    number;
    lc:                                                                                string;
    link:                                                                              string;
    main_countries_tags:                                                               any[];
    manufacturing_places:                                                              string;
    manufacturing_places_tags:                                                         any[];
    max_imgid:                                                                         string;
    minerals_prev_tags:                                                                any[];
    minerals_tags:                                                                     any[];
    misc_tags:                                                                         string[];
    no_nutrition_data:                                                                 string;
    nova_group:                                                                        number;
    nova_group_debug:                                                                  string;
    nova_groups:                                                                       string;
    nova_groups_markers:                                                               { [key: string]: Array<string[]> };
    nova_groups_tags:                                                                  string[];
    nucleotides_prev_tags:                                                             any[];
    nucleotides_tags:                                                                  any[];
    nutrient_levels:                                                                   NutrientLevels;
    nutrient_levels_tags:                                                              string[];
    nutriments:                                                                        Nutriments;
    nutriscore:                                                                        { [key: string]: Nutriscore };
    nutriscore_2021_tags:                                                              string[];
    nutriscore_2023_tags:                                                              EcoscoreGrade[];
    nutriscore_data:                                                                   NutriscoreData;
    nutriscore_grade:                                                                  EcoscoreGrade;
    nutriscore_score:                                                                  number;
    nutriscore_score_opposite:                                                         number;
    nutriscore_tags:                                                                   EcoscoreGrade[];
    nutriscore_version:                                                                string;
    nutrition_data:                                                                    string;
    nutrition_data_per:                                                                string;
    nutrition_data_prepared:                                                           string;
    nutrition_data_prepared_per:                                                       string;
    nutrition_grade_fr:                                                                EcoscoreGrade;
    nutrition_grades:                                                                  EcoscoreGrade;
    nutrition_grades_tags:                                                             EcoscoreGrade[];
    nutrition_score_beverage:                                                          number;
    nutrition_score_debug:                                                             string;
    nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients:       number;
    nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients_value: number;
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients:          number;
    nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value:    number;
    obsolete:                                                                          string;
    obsolete_since_date:                                                               string;
    origin:                                                                            string;
    origin_bg:                                                                         string;
    origin_es:                                                                         string;
    origins:                                                                           string;
    origins_hierarchy:                                                                 any[];
    origins_lc:                                                                        string;
    origins_old:                                                                       string;
    origins_tags:                                                                      any[];
    other_nutritional_substances_tags:                                                 any[];
    packaging:                                                                         string;
    packaging_hierarchy:                                                               string[];
    packaging_lc:                                                                      string;
    packaging_materials_tags:                                                          string[];
    packaging_old:                                                                     string;
    packaging_old_before_taxonomization:                                               string;
    packaging_recycling_tags:                                                          string[];
    packaging_shapes_tags:                                                             string[];
    packaging_tags:                                                                    string[];
    packaging_text:                                                                    string;
    packaging_text_bg:                                                                 string;
    packaging_text_es:                                                                 string;
    packagings:                                                                        OpenFoodFactsProductPackaging[];
    packagings_complete:                                                               number;
    packagings_materials:                                                              PackagingsMaterials;
    packagings_n:                                                                      number;
    photographers_tags:                                                                string[];
    pnns_groups_1:                                                                     string;
    pnns_groups_1_tags:                                                                string[];
    pnns_groups_2:                                                                     string;
    pnns_groups_2_tags:                                                                string[];
    popularity_key:                                                                    number;
    popularity_tags:                                                                   string[];
    product:                                                                           CategoryProperties;
    product_name:                                                                      string;
    product_name_bg:                                                                   string;
    product_name_es:                                                                   string;
    product_name_fr:                                                                   string;
    product_quantity:                                                                  string;
    product_quantity_unit:                                                             Unit;
    product_type:                                                                      string;
    purchase_places:                                                                   string;
    purchase_places_tags:                                                              any[];
    quantity:                                                                          string;
    removed_countries_tags:                                                            any[];
    rev:                                                                               number;
    scans_n:                                                                           number;
    schema_version:                                                                    number;
    selected_images:                                                                   SelectedImages;
    serving_quantity:                                                                  number;
    serving_quantity_unit:                                                             Unit;
    serving_size:                                                                      string;
    sortkey:                                                                           number;
    states:                                                                            string;
    states_hierarchy:                                                                  string[];
    states_tags:                                                                       string[];
    stores:                                                                            string;
    stores_tags:                                                                       any[];
    teams:                                                                             string;
    teams_tags:                                                                        string[];
    traces:                                                                            string;
    traces_from_ingredients:                                                           string;
    traces_from_user:                                                                  string;
    traces_hierarchy:                                                                  string[];
    traces_lc:                                                                         string;
    traces_tags:                                                                       string[];
    unique_scans_n:                                                                    number;
    unknown_ingredients_n:                                                             number;
    unknown_nutrients_tags:                                                            any[];
    update_key:                                                                        string;
    vitamins_prev_tags:                                                                any[];
    vitamins_tags:                                                                     any[];
    weighers_tags:                                                                     any[];
}

export interface CategoriesProperties {
    "agribalyse_proxy_food_code:en": string;
}

export interface CategoryProperties {
}

export interface EcoscoreData {
    adjustments:          Adjustments;
    agribalyse:           Agribalyse;
    grade:                EcoscoreGrade;
    grades:               { [key: string]: EcoscoreGrade };
    missing:              Missing;
    missing_data_warning: number;
    score:                number;
    scores:               { [key: string]: number };
    status:               string;
}

export interface Adjustments {
    origins_of_ingredients: OriginsOfIngredients;
    packaging:              AdjustmentsPackaging;
    production_system:      ProductionSystem;
    threatened_species:     CategoryProperties;
}

export interface OriginsOfIngredients {
    aggregated_origins:         AggregatedOrigin[];
    epi_score:                  number;
    epi_value:                  number;
    origins_from_categories:    string[];
    origins_from_origins_field: string[];
    transportation_score:       number;
    transportation_scores:      { [key: string]: number };
    transportation_value:       number;
    transportation_values:      { [key: string]: number };
    value:                      number;
    values:                     { [key: string]: number };
    warning:                    string;
}

export interface AggregatedOrigin {
    epi_score:            number;
    origin:               string;
    percent:              number;
    transportation_score: number;
}

export interface AdjustmentsPackaging {
    non_recyclable_and_non_biodegradable_materials: number;
    packagings:                                     PackagingPackaging[];
    score:                                          number;
    value:                                          number;
}

export interface PackagingPackaging {
    environmental_score_material_score:    number;
    environmental_score_shape_ratio:       number;
    material:                              string;
    number_of_units:                       number;
    recycling:                             string;
    shape:                                 string;
    non_recyclable_and_non_biodegradable?: Vegan;
}

export enum Vegan {
    Maybe = "maybe",
    Yes = "yes",
}

export interface ProductionSystem {
    labels:  any[];
    value:   number;
    warning: string;
}

export interface Agribalyse {
    agribalyse_proxy_food_code: string;
    co2_agriculture:            number;
    co2_consumption:            number;
    co2_distribution:           number;
    co2_packaging:              number;
    co2_processing:             number;
    co2_total:                  number;
    co2_transportation:         number;
    code:                       string;
    dqr:                        string;
    ef_agriculture:             number;
    ef_consumption:             number;
    ef_distribution:            number;
    ef_packaging:               number;
    ef_processing:              number;
    ef_total:                   number;
    ef_transportation:          number;
    is_beverage:                number;
    name_en:                    string;
    name_fr:                    string;
    score:                      number;
    version:                    string;
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
    labels:  number;
    origins: number;
}

export interface Images {
    "1":          The1;
    "2":          The1;
    "3":          The1;
    "4":          The1;
    "5":          The10;
    "6":          The10;
    "7":          The10;
    "8":          The10;
    "9":          The10;
    "10":         The10;
    "11":         The10;
    "12":         The10;
    "14":         The10;
    "15":         The10;
    "16":         The10;
    "17":         The10;
    "18":         The10;
    "19":         The10;
    "20":         The10;
    "22":         The10;
    "23":         The10;
    "24":         The10;
    "25":         The10;
    "26":         The10;
    "27":         The10;
    front_es:     FrontEs;
    nutrition_bg: FrontEs;
    nutrition_es: FrontEs;
}

export interface The1 {
    sizes:      Sizes;
    uploaded_t: string;
    uploader:   string;
}

export interface Sizes {
    "100":  The100;
    "400":  The100;
    full:   The100;
    "200"?: The100;
}

export interface The100 {
    h: number;
    w: number;
}

export interface The10 {
    sizes:      Sizes;
    uploaded_t: number;
    uploader:   Uploader;
}

export enum Uploader {
    Kiliweb = "kiliweb",
    Roto = "roto",
}

export interface FrontEs {
    angle?: number;
    imgid:  string;
    rev:    string;
    sizes:  Sizes;
}

export interface Ingredient {
    ciqual_food_code?:       string;
    id:                      string;
    is_in_taxonomy:          number;
    percent?:                number;
    percent_estimate:        number;
    percent_max:             number;
    percent_min:             number;
    text:                    string;
    vegan?:                  Vegan;
    vegetarian?:             Vegan;
    ciqual_proxy_food_code?: string;
    ecobalyse_code?:         string;
    from_palm_oil?:          string;
    ingredients?:            Ingredient[];
}

export interface Languages {
    "en:bulgarian": number;
    "en:spanish":   number;
}

export interface LanguagesCodes {
    bg: number;
    es: number;
}

export interface NutrientLevels {
    fat:             string;
    salt:            string;
    "saturated-fat": string;
    sugars:          string;
}

export interface Nutriments {
    carbohydrates:                                                 number;
    carbohydrates_100g:                                            number;
    carbohydrates_serving:                                         number;
    carbohydrates_unit:                                            Unit;
    carbohydrates_value:                                           number;
    "carbon-footprint-from-known-ingredients_100g":                number;
    "carbon-footprint-from-known-ingredients_product":             number;
    "carbon-footprint-from-known-ingredients_serving":             number;
    energy:                                                        number;
    "energy-kcal":                                                 number;
    "energy-kcal_100g":                                            number;
    "energy-kcal_serving":                                         number;
    "energy-kcal_unit":                                            string;
    "energy-kcal_value":                                           number;
    "energy-kcal_value_computed":                                  number;
    "energy-kj":                                                   number;
    "energy-kj_100g":                                              number;
    "energy-kj_serving":                                           number;
    "energy-kj_unit":                                              Unit;
    "energy-kj_value":                                             number;
    "energy-kj_value_computed":                                    number;
    energy_100g:                                                   number;
    energy_serving:                                                number;
    energy_unit:                                                   Unit;
    energy_value:                                                  number;
    fat:                                                           number;
    fat_100g:                                                      number;
    fat_serving:                                                   number;
    fat_unit:                                                      Unit;
    fat_value:                                                     number;
    fiber:                                                         number;
    fiber_100g:                                                    number;
    fiber_serving:                                                 number;
    fiber_unit:                                                    Unit;
    fiber_value:                                                   number;
    "fruits-vegetables-legumes-estimate-from-ingredients_100g":    number;
    "fruits-vegetables-legumes-estimate-from-ingredients_serving": number;
    "fruits-vegetables-nuts-estimate-from-ingredients_100g":       number;
    "fruits-vegetables-nuts-estimate-from-ingredients_serving":    number;
    "monounsaturated-fat":                                         number;
    "monounsaturated-fat_100g":                                    number;
    "monounsaturated-fat_label":                                   string;
    "monounsaturated-fat_serving":                                 number;
    "monounsaturated-fat_unit":                                    Unit;
    "monounsaturated-fat_value":                                   number;
    "nova-group":                                                  number;
    "nova-group_100g":                                             number;
    "nova-group_serving":                                          number;
    "nutrition-score-fr":                                          number;
    "nutrition-score-fr_100g":                                     number;
    polyols:                                                       number;
    polyols_100g:                                                  number;
    polyols_label:                                                 string;
    polyols_serving:                                               number;
    polyols_unit:                                                  Unit;
    polyols_value:                                                 number;
    "polyunsaturated-fat":                                         number;
    "polyunsaturated-fat_100g":                                    number;
    "polyunsaturated-fat_label":                                   string;
    "polyunsaturated-fat_serving":                                 number;
    "polyunsaturated-fat_unit":                                    Unit;
    "polyunsaturated-fat_value":                                   number;
    proteins:                                                      number;
    proteins_100g:                                                 number;
    proteins_serving:                                              number;
    proteins_unit:                                                 Unit;
    proteins_value:                                                number;
    salt:                                                          number;
    salt_100g:                                                     number;
    salt_serving:                                                  number;
    salt_unit:                                                     Unit;
    salt_value:                                                    number;
    "saturated-fat":                                               number;
    "saturated-fat_100g":                                          number;
    "saturated-fat_serving":                                       number;
    "saturated-fat_unit":                                          Unit;
    "saturated-fat_value":                                         number;
    sodium:                                                        number;
    sodium_100g:                                                   number;
    sodium_serving:                                                number;
    sodium_unit:                                                   Unit;
    sodium_value:                                                  number;
    starch:                                                        number;
    starch_100g:                                                   number;
    starch_label:                                                  string;
    starch_serving:                                                number;
    starch_unit:                                                   Unit;
    starch_value:                                                  number;
    sugars:                                                        number;
    sugars_100g:                                                   number;
    sugars_serving:                                                number;
    sugars_unit:                                                   Unit;
    sugars_value:                                                  number;
}

export enum Unit {
    Empty = "%",
    G = "g",
    KJ = "kJ",
}

export interface Nutriscore {
    category_available:    number;
    data:                  Data;
    grade:                 string;
    nutrients_available:   number;
    nutriscore_applicable: number;
    nutriscore_computed:   number;
    score:                 number;
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
    is_beverage:                                            number;
    is_cheese:                                              number;
    is_fat?:                                                number;
    is_water:                                               number;
    negative_points:                                        number;
    positive_points:                                        number;
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
    negative: Tive[];
    positive: Tive[];
}

export interface Tive {
    id:         string;
    points:     number;
    points_max: number;
    unit:       Unit;
    value:      number;
}

export interface NutriscoreData {
    components:            Components;
    count_proteins:        number;
    count_proteins_reason: string;
    is_beverage:           number;
    is_cheese:             number;
    is_fat_oil_nuts_seeds: number;
    is_red_meat_product:   number;
    is_water:              number;
    negative_points:       number;
    negative_points_max:   number;
    positive_nutrients:    string[];
    positive_points:       number;
    positive_points_max:   number;
    grade?:                EcoscoreGrade;
    score?:                number;
}

export interface OpenFoodFactsProductPackaging {
    material:        string;
    number_of_units: number;
    recycling:       string;
    shape:           string;
}

export interface PackagingsMaterials {
    all:                     CategoryProperties;
    "en:paper-or-cardboard": CategoryProperties;
    "en:plastic":            CategoryProperties;
}

export interface SelectedImages {
    front:     Front;
    nutrition: Nutrition;
}

export interface Front {
    display: FrontDisplay;
    small:   FrontDisplay;
    thumb:   FrontDisplay;
}

export interface FrontDisplay {
    es: string;
}

export interface Nutrition {
    display: NutritionDisplay;
    small:   NutritionDisplay;
    thumb:   NutritionDisplay;
}

export interface NutritionDisplay {
    bg: string;
    es: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toOpenFoodFactsProduct(json: string): OpenFoodFactsProduct {
        return cast(JSON.parse(json), r("OpenFoodFactsProduct"));
    }

    public static openFoodFactsProductToJson(value: OpenFoodFactsProduct): string {
        return JSON.stringify(uncast(value, r("OpenFoodFactsProduct")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "OpenFoodFactsProduct": o([
        { json: "_id", js: "_id", typ: "" },
        { json: "_keywords", js: "_keywords", typ: a("") },
        { json: "added_countries_tags", js: "added_countries_tags", typ: a("any") },
        { json: "additives_n", js: "additives_n", typ: 0 },
        { json: "additives_original_tags", js: "additives_original_tags", typ: a("") },
        { json: "additives_tags", js: "additives_tags", typ: a("") },
        { json: "allergens", js: "allergens", typ: "" },
        { json: "allergens_from_ingredients", js: "allergens_from_ingredients", typ: "" },
        { json: "allergens_from_user", js: "allergens_from_user", typ: "" },
        { json: "allergens_hierarchy", js: "allergens_hierarchy", typ: a("") },
        { json: "allergens_lc", js: "allergens_lc", typ: "" },
        { json: "allergens_tags", js: "allergens_tags", typ: a("") },
        { json: "amino_acids_prev_tags", js: "amino_acids_prev_tags", typ: a("any") },
        { json: "amino_acids_tags", js: "amino_acids_tags", typ: a("any") },
        { json: "brands", js: "brands", typ: "" },
        { json: "brands_old", js: "brands_old", typ: "" },
        { json: "brands_tags", js: "brands_tags", typ: a("") },
        { json: "carbon_footprint_from_known_ingredients_debug", js: "carbon_footprint_from_known_ingredients_debug", typ: "" },
        { json: "carbon_footprint_percent_of_known_ingredients", js: "carbon_footprint_percent_of_known_ingredients", typ: 0 },
        { json: "categories", js: "categories", typ: "" },
        { json: "categories_hierarchy", js: "categories_hierarchy", typ: a("") },
        { json: "categories_lc", js: "categories_lc", typ: "" },
        { json: "categories_old", js: "categories_old", typ: "" },
        { json: "categories_properties", js: "categories_properties", typ: r("CategoriesProperties") },
        { json: "categories_properties_tags", js: "categories_properties_tags", typ: a("") },
        { json: "categories_tags", js: "categories_tags", typ: a("") },
        { json: "category_properties", js: "category_properties", typ: r("CategoryProperties") },
        { json: "checkers_tags", js: "checkers_tags", typ: a("any") },
        { json: "ciqual_food_name_tags", js: "ciqual_food_name_tags", typ: a("") },
        { json: "cities_tags", js: "cities_tags", typ: a("any") },
        { json: "code", js: "code", typ: "" },
        { json: "codes_tags", js: "codes_tags", typ: a("") },
        { json: "compared_to_category", js: "compared_to_category", typ: "" },
        { json: "complete", js: "complete", typ: 0 },
        { json: "completeness", js: "completeness", typ: 3.14 },
        { json: "correctors_tags", js: "correctors_tags", typ: a("") },
        { json: "countries", js: "countries", typ: "" },
        { json: "countries_beforescanbot", js: "countries_beforescanbot", typ: "" },
        { json: "countries_hierarchy", js: "countries_hierarchy", typ: a("") },
        { json: "countries_lc", js: "countries_lc", typ: "" },
        { json: "countries_tags", js: "countries_tags", typ: a("") },
        { json: "created_t", js: "created_t", typ: 0 },
        { json: "creator", js: "creator", typ: "" },
        { json: "data_quality_bugs_tags", js: "data_quality_bugs_tags", typ: a("any") },
        { json: "data_quality_errors_tags", js: "data_quality_errors_tags", typ: a("any") },
        { json: "data_quality_info_tags", js: "data_quality_info_tags", typ: a("") },
        { json: "data_quality_tags", js: "data_quality_tags", typ: a("") },
        { json: "data_quality_warnings_tags", js: "data_quality_warnings_tags", typ: a("") },
        { json: "data_sources", js: "data_sources", typ: "" },
        { json: "data_sources_tags", js: "data_sources_tags", typ: a("") },
        { json: "debug_param_sorted_langs", js: "debug_param_sorted_langs", typ: a("") },
        { json: "ecoscore_data", js: "ecoscore_data", typ: r("EcoscoreData") },
        { json: "ecoscore_grade", js: "ecoscore_grade", typ: r("EcoscoreGrade") },
        { json: "ecoscore_score", js: "ecoscore_score", typ: 0 },
        { json: "ecoscore_tags", js: "ecoscore_tags", typ: a(r("EcoscoreGrade")) },
        { json: "editors_tags", js: "editors_tags", typ: a("") },
        { json: "emb_codes", js: "emb_codes", typ: "" },
        { json: "emb_codes_orig", js: "emb_codes_orig", typ: "" },
        { json: "emb_codes_tags", js: "emb_codes_tags", typ: a("any") },
        { json: "entry_dates_tags", js: "entry_dates_tags", typ: a("") },
        { json: "environment_impact_level", js: "environment_impact_level", typ: "" },
        { json: "environment_impact_level_tags", js: "environment_impact_level_tags", typ: a("any") },
        { json: "expiration_date", js: "expiration_date", typ: "" },
        { json: "food_groups", js: "food_groups", typ: "" },
        { json: "food_groups_tags", js: "food_groups_tags", typ: a("") },
        { json: "fruits-vegetables-nuts_100g_estimate", js: "fruits-vegetables-nuts_100g_estimate", typ: 0 },
        { json: "generic_name", js: "generic_name", typ: "" },
        { json: "generic_name_bg", js: "generic_name_bg", typ: "" },
        { json: "generic_name_es", js: "generic_name_es", typ: "" },
        { json: "generic_name_fr", js: "generic_name_fr", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "image_front_small_url", js: "image_front_small_url", typ: "" },
        { json: "image_front_thumb_url", js: "image_front_thumb_url", typ: "" },
        { json: "image_front_url", js: "image_front_url", typ: "" },
        { json: "image_nutrition_small_url", js: "image_nutrition_small_url", typ: "" },
        { json: "image_nutrition_thumb_url", js: "image_nutrition_thumb_url", typ: "" },
        { json: "image_nutrition_url", js: "image_nutrition_url", typ: "" },
        { json: "image_small_url", js: "image_small_url", typ: "" },
        { json: "image_thumb_url", js: "image_thumb_url", typ: "" },
        { json: "image_url", js: "image_url", typ: "" },
        { json: "images", js: "images", typ: r("Images") },
        { json: "informers_tags", js: "informers_tags", typ: a("") },
        { json: "ingredients", js: "ingredients", typ: a(r("Ingredient")) },
        { json: "ingredients_analysis", js: "ingredients_analysis", typ: r("CategoryProperties") },
        { json: "ingredients_analysis_tags", js: "ingredients_analysis_tags", typ: a("") },
        { json: "ingredients_debug", js: "ingredients_debug", typ: a(u(null, "")) },
        { json: "ingredients_from_or_that_may_be_from_palm_oil_n", js: "ingredients_from_or_that_may_be_from_palm_oil_n", typ: 0 },
        { json: "ingredients_from_palm_oil_n", js: "ingredients_from_palm_oil_n", typ: 0 },
        { json: "ingredients_from_palm_oil_tags", js: "ingredients_from_palm_oil_tags", typ: a("any") },
        { json: "ingredients_hierarchy", js: "ingredients_hierarchy", typ: a("") },
        { json: "ingredients_ids_debug", js: "ingredients_ids_debug", typ: a("") },
        { json: "ingredients_lc", js: "ingredients_lc", typ: "" },
        { json: "ingredients_n", js: "ingredients_n", typ: 0 },
        { json: "ingredients_n_tags", js: "ingredients_n_tags", typ: a("") },
        { json: "ingredients_non_nutritive_sweeteners_n", js: "ingredients_non_nutritive_sweeteners_n", typ: 0 },
        { json: "ingredients_original_tags", js: "ingredients_original_tags", typ: a("") },
        { json: "ingredients_percent_analysis", js: "ingredients_percent_analysis", typ: 0 },
        { json: "ingredients_sweeteners_n", js: "ingredients_sweeteners_n", typ: 0 },
        { json: "ingredients_tags", js: "ingredients_tags", typ: a("") },
        { json: "ingredients_text", js: "ingredients_text", typ: "" },
        { json: "ingredients_text_bg", js: "ingredients_text_bg", typ: "" },
        { json: "ingredients_text_debug", js: "ingredients_text_debug", typ: "" },
        { json: "ingredients_text_es", js: "ingredients_text_es", typ: "" },
        { json: "ingredients_text_fr", js: "ingredients_text_fr", typ: "" },
        { json: "ingredients_text_with_allergens", js: "ingredients_text_with_allergens", typ: "" },
        { json: "ingredients_text_with_allergens_bg", js: "ingredients_text_with_allergens_bg", typ: "" },
        { json: "ingredients_text_with_allergens_es", js: "ingredients_text_with_allergens_es", typ: "" },
        { json: "ingredients_that_may_be_from_palm_oil_n", js: "ingredients_that_may_be_from_palm_oil_n", typ: 0 },
        { json: "ingredients_that_may_be_from_palm_oil_tags", js: "ingredients_that_may_be_from_palm_oil_tags", typ: a("any") },
        { json: "ingredients_with_specified_percent_n", js: "ingredients_with_specified_percent_n", typ: 0 },
        { json: "ingredients_with_specified_percent_sum", js: "ingredients_with_specified_percent_sum", typ: 3.14 },
        { json: "ingredients_with_unspecified_percent_n", js: "ingredients_with_unspecified_percent_n", typ: 0 },
        { json: "ingredients_with_unspecified_percent_sum", js: "ingredients_with_unspecified_percent_sum", typ: 3.14 },
        { json: "ingredients_without_ciqual_codes", js: "ingredients_without_ciqual_codes", typ: a("") },
        { json: "ingredients_without_ciqual_codes_n", js: "ingredients_without_ciqual_codes_n", typ: 0 },
        { json: "ingredients_without_ecobalyse_ids", js: "ingredients_without_ecobalyse_ids", typ: a("") },
        { json: "ingredients_without_ecobalyse_ids_n", js: "ingredients_without_ecobalyse_ids_n", typ: 0 },
        { json: "interface_version_created", js: "interface_version_created", typ: "" },
        { json: "interface_version_modified", js: "interface_version_modified", typ: "" },
        { json: "known_ingredients_n", js: "known_ingredients_n", typ: 0 },
        { json: "labels", js: "labels", typ: "" },
        { json: "labels_hierarchy", js: "labels_hierarchy", typ: a("") },
        { json: "labels_lc", js: "labels_lc", typ: "" },
        { json: "labels_old", js: "labels_old", typ: "" },
        { json: "labels_tags", js: "labels_tags", typ: a("") },
        { json: "lang", js: "lang", typ: "" },
        { json: "languages", js: "languages", typ: r("Languages") },
        { json: "languages_codes", js: "languages_codes", typ: r("LanguagesCodes") },
        { json: "languages_hierarchy", js: "languages_hierarchy", typ: a("") },
        { json: "languages_tags", js: "languages_tags", typ: a("") },
        { json: "last_edit_dates_tags", js: "last_edit_dates_tags", typ: a("") },
        { json: "last_editor", js: "last_editor", typ: "" },
        { json: "last_image_dates_tags", js: "last_image_dates_tags", typ: a("") },
        { json: "last_image_t", js: "last_image_t", typ: 0 },
        { json: "last_modified_by", js: "last_modified_by", typ: "" },
        { json: "last_modified_t", js: "last_modified_t", typ: 0 },
        { json: "last_updated_t", js: "last_updated_t", typ: 0 },
        { json: "lc", js: "lc", typ: "" },
        { json: "link", js: "link", typ: "" },
        { json: "main_countries_tags", js: "main_countries_tags", typ: a("any") },
        { json: "manufacturing_places", js: "manufacturing_places", typ: "" },
        { json: "manufacturing_places_tags", js: "manufacturing_places_tags", typ: a("any") },
        { json: "max_imgid", js: "max_imgid", typ: "" },
        { json: "minerals_prev_tags", js: "minerals_prev_tags", typ: a("any") },
        { json: "minerals_tags", js: "minerals_tags", typ: a("any") },
        { json: "misc_tags", js: "misc_tags", typ: a("") },
        { json: "no_nutrition_data", js: "no_nutrition_data", typ: "" },
        { json: "nova_group", js: "nova_group", typ: 0 },
        { json: "nova_group_debug", js: "nova_group_debug", typ: "" },
        { json: "nova_groups", js: "nova_groups", typ: "" },
        { json: "nova_groups_markers", js: "nova_groups_markers", typ: m(a(a(""))) },
        { json: "nova_groups_tags", js: "nova_groups_tags", typ: a("") },
        { json: "nucleotides_prev_tags", js: "nucleotides_prev_tags", typ: a("any") },
        { json: "nucleotides_tags", js: "nucleotides_tags", typ: a("any") },
        { json: "nutrient_levels", js: "nutrient_levels", typ: r("NutrientLevels") },
        { json: "nutrient_levels_tags", js: "nutrient_levels_tags", typ: a("") },
        { json: "nutriments", js: "nutriments", typ: r("Nutriments") },
        { json: "nutriscore", js: "nutriscore", typ: m(r("Nutriscore")) },
        { json: "nutriscore_2021_tags", js: "nutriscore_2021_tags", typ: a("") },
        { json: "nutriscore_2023_tags", js: "nutriscore_2023_tags", typ: a(r("EcoscoreGrade")) },
        { json: "nutriscore_data", js: "nutriscore_data", typ: r("NutriscoreData") },
        { json: "nutriscore_grade", js: "nutriscore_grade", typ: r("EcoscoreGrade") },
        { json: "nutriscore_score", js: "nutriscore_score", typ: 0 },
        { json: "nutriscore_score_opposite", js: "nutriscore_score_opposite", typ: 0 },
        { json: "nutriscore_tags", js: "nutriscore_tags", typ: a(r("EcoscoreGrade")) },
        { json: "nutriscore_version", js: "nutriscore_version", typ: "" },
        { json: "nutrition_data", js: "nutrition_data", typ: "" },
        { json: "nutrition_data_per", js: "nutrition_data_per", typ: "" },
        { json: "nutrition_data_prepared", js: "nutrition_data_prepared", typ: "" },
        { json: "nutrition_data_prepared_per", js: "nutrition_data_prepared_per", typ: "" },
        { json: "nutrition_grade_fr", js: "nutrition_grade_fr", typ: r("EcoscoreGrade") },
        { json: "nutrition_grades", js: "nutrition_grades", typ: r("EcoscoreGrade") },
        { json: "nutrition_grades_tags", js: "nutrition_grades_tags", typ: a(r("EcoscoreGrade")) },
        { json: "nutrition_score_beverage", js: "nutrition_score_beverage", typ: 0 },
        { json: "nutrition_score_debug", js: "nutrition_score_debug", typ: "" },
        { json: "nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients", js: "nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients", typ: 0 },
        { json: "nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients_value", js: "nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients_value", typ: 0 },
        { json: "nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients", js: "nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients", typ: 0 },
        { json: "nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value", js: "nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value", typ: 0 },
        { json: "obsolete", js: "obsolete", typ: "" },
        { json: "obsolete_since_date", js: "obsolete_since_date", typ: "" },
        { json: "origin", js: "origin", typ: "" },
        { json: "origin_bg", js: "origin_bg", typ: "" },
        { json: "origin_es", js: "origin_es", typ: "" },
        { json: "origins", js: "origins", typ: "" },
        { json: "origins_hierarchy", js: "origins_hierarchy", typ: a("any") },
        { json: "origins_lc", js: "origins_lc", typ: "" },
        { json: "origins_old", js: "origins_old", typ: "" },
        { json: "origins_tags", js: "origins_tags", typ: a("any") },
        { json: "other_nutritional_substances_tags", js: "other_nutritional_substances_tags", typ: a("any") },
        { json: "packaging", js: "packaging", typ: "" },
        { json: "packaging_hierarchy", js: "packaging_hierarchy", typ: a("") },
        { json: "packaging_lc", js: "packaging_lc", typ: "" },
        { json: "packaging_materials_tags", js: "packaging_materials_tags", typ: a("") },
        { json: "packaging_old", js: "packaging_old", typ: "" },
        { json: "packaging_old_before_taxonomization", js: "packaging_old_before_taxonomization", typ: "" },
        { json: "packaging_recycling_tags", js: "packaging_recycling_tags", typ: a("") },
        { json: "packaging_shapes_tags", js: "packaging_shapes_tags", typ: a("") },
        { json: "packaging_tags", js: "packaging_tags", typ: a("") },
        { json: "packaging_text", js: "packaging_text", typ: "" },
        { json: "packaging_text_bg", js: "packaging_text_bg", typ: "" },
        { json: "packaging_text_es", js: "packaging_text_es", typ: "" },
        { json: "packagings", js: "packagings", typ: a(r("OpenFoodFactsProductPackaging")) },
        { json: "packagings_complete", js: "packagings_complete", typ: 0 },
        { json: "packagings_materials", js: "packagings_materials", typ: r("PackagingsMaterials") },
        { json: "packagings_n", js: "packagings_n", typ: 0 },
        { json: "photographers_tags", js: "photographers_tags", typ: a("") },
        { json: "pnns_groups_1", js: "pnns_groups_1", typ: "" },
        { json: "pnns_groups_1_tags", js: "pnns_groups_1_tags", typ: a("") },
        { json: "pnns_groups_2", js: "pnns_groups_2", typ: "" },
        { json: "pnns_groups_2_tags", js: "pnns_groups_2_tags", typ: a("") },
        { json: "popularity_key", js: "popularity_key", typ: 0 },
        { json: "popularity_tags", js: "popularity_tags", typ: a("") },
        { json: "product", js: "product", typ: r("CategoryProperties") },
        { json: "product_name", js: "product_name", typ: "" },
        { json: "product_name_bg", js: "product_name_bg", typ: "" },
        { json: "product_name_es", js: "product_name_es", typ: "" },
        { json: "product_name_fr", js: "product_name_fr", typ: "" },
        { json: "product_quantity", js: "product_quantity", typ: "" },
        { json: "product_quantity_unit", js: "product_quantity_unit", typ: r("Unit") },
        { json: "product_type", js: "product_type", typ: "" },
        { json: "purchase_places", js: "purchase_places", typ: "" },
        { json: "purchase_places_tags", js: "purchase_places_tags", typ: a("any") },
        { json: "quantity", js: "quantity", typ: "" },
        { json: "removed_countries_tags", js: "removed_countries_tags", typ: a("any") },
        { json: "rev", js: "rev", typ: 0 },
        { json: "scans_n", js: "scans_n", typ: 0 },
        { json: "schema_version", js: "schema_version", typ: 0 },
        { json: "selected_images", js: "selected_images", typ: r("SelectedImages") },
        { json: "serving_quantity", js: "serving_quantity", typ: 3.14 },
        { json: "serving_quantity_unit", js: "serving_quantity_unit", typ: r("Unit") },
        { json: "serving_size", js: "serving_size", typ: "" },
        { json: "sortkey", js: "sortkey", typ: 0 },
        { json: "states", js: "states", typ: "" },
        { json: "states_hierarchy", js: "states_hierarchy", typ: a("") },
        { json: "states_tags", js: "states_tags", typ: a("") },
        { json: "stores", js: "stores", typ: "" },
        { json: "stores_tags", js: "stores_tags", typ: a("any") },
        { json: "teams", js: "teams", typ: "" },
        { json: "teams_tags", js: "teams_tags", typ: a("") },
        { json: "traces", js: "traces", typ: "" },
        { json: "traces_from_ingredients", js: "traces_from_ingredients", typ: "" },
        { json: "traces_from_user", js: "traces_from_user", typ: "" },
        { json: "traces_hierarchy", js: "traces_hierarchy", typ: a("") },
        { json: "traces_lc", js: "traces_lc", typ: "" },
        { json: "traces_tags", js: "traces_tags", typ: a("") },
        { json: "unique_scans_n", js: "unique_scans_n", typ: 0 },
        { json: "unknown_ingredients_n", js: "unknown_ingredients_n", typ: 0 },
        { json: "unknown_nutrients_tags", js: "unknown_nutrients_tags", typ: a("any") },
        { json: "update_key", js: "update_key", typ: "" },
        { json: "vitamins_prev_tags", js: "vitamins_prev_tags", typ: a("any") },
        { json: "vitamins_tags", js: "vitamins_tags", typ: a("any") },
        { json: "weighers_tags", js: "weighers_tags", typ: a("any") },
    ], false),
    "CategoriesProperties": o([
        { json: "agribalyse_proxy_food_code:en", js: "agribalyse_proxy_food_code:en", typ: "" },
    ], false),
    "CategoryProperties": o([
    ], false),
    "EcoscoreData": o([
        { json: "adjustments", js: "adjustments", typ: r("Adjustments") },
        { json: "agribalyse", js: "agribalyse", typ: r("Agribalyse") },
        { json: "grade", js: "grade", typ: r("EcoscoreGrade") },
        { json: "grades", js: "grades", typ: m(r("EcoscoreGrade")) },
        { json: "missing", js: "missing", typ: r("Missing") },
        { json: "missing_data_warning", js: "missing_data_warning", typ: 0 },
        { json: "score", js: "score", typ: 0 },
        { json: "scores", js: "scores", typ: m(0) },
        { json: "status", js: "status", typ: "" },
    ], false),
    "Adjustments": o([
        { json: "origins_of_ingredients", js: "origins_of_ingredients", typ: r("OriginsOfIngredients") },
        { json: "packaging", js: "packaging", typ: r("AdjustmentsPackaging") },
        { json: "production_system", js: "production_system", typ: r("ProductionSystem") },
        { json: "threatened_species", js: "threatened_species", typ: r("CategoryProperties") },
    ], false),
    "OriginsOfIngredients": o([
        { json: "aggregated_origins", js: "aggregated_origins", typ: a(r("AggregatedOrigin")) },
        { json: "epi_score", js: "epi_score", typ: 0 },
        { json: "epi_value", js: "epi_value", typ: 0 },
        { json: "origins_from_categories", js: "origins_from_categories", typ: a("") },
        { json: "origins_from_origins_field", js: "origins_from_origins_field", typ: a("") },
        { json: "transportation_score", js: "transportation_score", typ: 0 },
        { json: "transportation_scores", js: "transportation_scores", typ: m(0) },
        { json: "transportation_value", js: "transportation_value", typ: 0 },
        { json: "transportation_values", js: "transportation_values", typ: m(0) },
        { json: "value", js: "value", typ: 0 },
        { json: "values", js: "values", typ: m(0) },
        { json: "warning", js: "warning", typ: "" },
    ], false),
    "AggregatedOrigin": o([
        { json: "epi_score", js: "epi_score", typ: 0 },
        { json: "origin", js: "origin", typ: "" },
        { json: "percent", js: "percent", typ: 0 },
        { json: "transportation_score", js: "transportation_score", typ: 0 },
    ], false),
    "AdjustmentsPackaging": o([
        { json: "non_recyclable_and_non_biodegradable_materials", js: "non_recyclable_and_non_biodegradable_materials", typ: 0 },
        { json: "packagings", js: "packagings", typ: a(r("PackagingPackaging")) },
        { json: "score", js: "score", typ: 0 },
        { json: "value", js: "value", typ: 0 },
    ], false),
    "PackagingPackaging": o([
        { json: "environmental_score_material_score", js: "environmental_score_material_score", typ: 0 },
        { json: "environmental_score_shape_ratio", js: "environmental_score_shape_ratio", typ: 0 },
        { json: "material", js: "material", typ: "" },
        { json: "number_of_units", js: "number_of_units", typ: 0 },
        { json: "recycling", js: "recycling", typ: "" },
        { json: "shape", js: "shape", typ: "" },
        { json: "non_recyclable_and_non_biodegradable", js: "non_recyclable_and_non_biodegradable", typ: u(undefined, r("Vegan")) },
    ], false),
    "ProductionSystem": o([
        { json: "labels", js: "labels", typ: a("any") },
        { json: "value", js: "value", typ: 0 },
        { json: "warning", js: "warning", typ: "" },
    ], false),
    "Agribalyse": o([
        { json: "agribalyse_proxy_food_code", js: "agribalyse_proxy_food_code", typ: "" },
        { json: "co2_agriculture", js: "co2_agriculture", typ: 3.14 },
        { json: "co2_consumption", js: "co2_consumption", typ: 0 },
        { json: "co2_distribution", js: "co2_distribution", typ: 3.14 },
        { json: "co2_packaging", js: "co2_packaging", typ: 3.14 },
        { json: "co2_processing", js: "co2_processing", typ: 3.14 },
        { json: "co2_total", js: "co2_total", typ: 3.14 },
        { json: "co2_transportation", js: "co2_transportation", typ: 3.14 },
        { json: "code", js: "code", typ: "" },
        { json: "dqr", js: "dqr", typ: "" },
        { json: "ef_agriculture", js: "ef_agriculture", typ: 3.14 },
        { json: "ef_consumption", js: "ef_consumption", typ: 0 },
        { json: "ef_distribution", js: "ef_distribution", typ: 3.14 },
        { json: "ef_packaging", js: "ef_packaging", typ: 3.14 },
        { json: "ef_processing", js: "ef_processing", typ: 3.14 },
        { json: "ef_total", js: "ef_total", typ: 3.14 },
        { json: "ef_transportation", js: "ef_transportation", typ: 3.14 },
        { json: "is_beverage", js: "is_beverage", typ: 0 },
        { json: "name_en", js: "name_en", typ: "" },
        { json: "name_fr", js: "name_fr", typ: "" },
        { json: "score", js: "score", typ: 0 },
        { json: "version", js: "version", typ: "" },
    ], false),
    "Missing": o([
        { json: "labels", js: "labels", typ: 0 },
        { json: "origins", js: "origins", typ: 0 },
    ], false),
    "Images": o([
        { json: "1", js: "1", typ: r("The1") },
        { json: "2", js: "2", typ: r("The1") },
        { json: "3", js: "3", typ: r("The1") },
        { json: "4", js: "4", typ: r("The1") },
        { json: "5", js: "5", typ: r("The10") },
        { json: "6", js: "6", typ: r("The10") },
        { json: "7", js: "7", typ: r("The10") },
        { json: "8", js: "8", typ: r("The10") },
        { json: "9", js: "9", typ: r("The10") },
        { json: "10", js: "10", typ: r("The10") },
        { json: "11", js: "11", typ: r("The10") },
        { json: "12", js: "12", typ: r("The10") },
        { json: "14", js: "14", typ: r("The10") },
        { json: "15", js: "15", typ: r("The10") },
        { json: "16", js: "16", typ: r("The10") },
        { json: "17", js: "17", typ: r("The10") },
        { json: "18", js: "18", typ: r("The10") },
        { json: "19", js: "19", typ: r("The10") },
        { json: "20", js: "20", typ: r("The10") },
        { json: "22", js: "22", typ: r("The10") },
        { json: "23", js: "23", typ: r("The10") },
        { json: "24", js: "24", typ: r("The10") },
        { json: "25", js: "25", typ: r("The10") },
        { json: "26", js: "26", typ: r("The10") },
        { json: "27", js: "27", typ: r("The10") },
        { json: "front_es", js: "front_es", typ: r("FrontEs") },
        { json: "nutrition_bg", js: "nutrition_bg", typ: r("FrontEs") },
        { json: "nutrition_es", js: "nutrition_es", typ: r("FrontEs") },
    ], false),
    "The1": o([
        { json: "sizes", js: "sizes", typ: r("Sizes") },
        { json: "uploaded_t", js: "uploaded_t", typ: "" },
        { json: "uploader", js: "uploader", typ: "" },
    ], false),
    "Sizes": o([
        { json: "100", js: "100", typ: r("The100") },
        { json: "400", js: "400", typ: r("The100") },
        { json: "full", js: "full", typ: r("The100") },
        { json: "200", js: "200", typ: u(undefined, r("The100")) },
    ], false),
    "The100": o([
        { json: "h", js: "h", typ: 0 },
        { json: "w", js: "w", typ: 0 },
    ], false),
    "The10": o([
        { json: "sizes", js: "sizes", typ: r("Sizes") },
        { json: "uploaded_t", js: "uploaded_t", typ: 0 },
        { json: "uploader", js: "uploader", typ: r("Uploader") },
    ], false),
    "FrontEs": o([
        { json: "angle", js: "angle", typ: u(undefined, 0) },
        { json: "imgid", js: "imgid", typ: "" },
        { json: "rev", js: "rev", typ: "" },
        { json: "sizes", js: "sizes", typ: r("Sizes") },
    ], false),
    "Ingredient": o([
        { json: "ciqual_food_code", js: "ciqual_food_code", typ: u(undefined, "") },
        { json: "id", js: "id", typ: "" },
        { json: "is_in_taxonomy", js: "is_in_taxonomy", typ: 0 },
        { json: "percent", js: "percent", typ: u(undefined, 3.14) },
        { json: "percent_estimate", js: "percent_estimate", typ: 3.14 },
        { json: "percent_max", js: "percent_max", typ: 3.14 },
        { json: "percent_min", js: "percent_min", typ: 3.14 },
        { json: "text", js: "text", typ: "" },
        { json: "vegan", js: "vegan", typ: u(undefined, r("Vegan")) },
        { json: "vegetarian", js: "vegetarian", typ: u(undefined, r("Vegan")) },
        { json: "ciqual_proxy_food_code", js: "ciqual_proxy_food_code", typ: u(undefined, "") },
        { json: "ecobalyse_code", js: "ecobalyse_code", typ: u(undefined, "") },
        { json: "from_palm_oil", js: "from_palm_oil", typ: u(undefined, "") },
        { json: "ingredients", js: "ingredients", typ: u(undefined, a(r("Ingredient"))) },
    ], false),
    "Languages": o([
        { json: "en:bulgarian", js: "en:bulgarian", typ: 0 },
        { json: "en:spanish", js: "en:spanish", typ: 0 },
    ], false),
    "LanguagesCodes": o([
        { json: "bg", js: "bg", typ: 0 },
        { json: "es", js: "es", typ: 0 },
    ], false),
    "NutrientLevels": o([
        { json: "fat", js: "fat", typ: "" },
        { json: "salt", js: "salt", typ: "" },
        { json: "saturated-fat", js: "saturated-fat", typ: "" },
        { json: "sugars", js: "sugars", typ: "" },
    ], false),
    "Nutriments": o([
        { json: "carbohydrates", js: "carbohydrates", typ: 0 },
        { json: "carbohydrates_100g", js: "carbohydrates_100g", typ: 0 },
        { json: "carbohydrates_serving", js: "carbohydrates_serving", typ: 3.14 },
        { json: "carbohydrates_unit", js: "carbohydrates_unit", typ: r("Unit") },
        { json: "carbohydrates_value", js: "carbohydrates_value", typ: 0 },
        { json: "carbon-footprint-from-known-ingredients_100g", js: "carbon-footprint-from-known-ingredients_100g", typ: 3.14 },
        { json: "carbon-footprint-from-known-ingredients_product", js: "carbon-footprint-from-known-ingredients_product", typ: 0 },
        { json: "carbon-footprint-from-known-ingredients_serving", js: "carbon-footprint-from-known-ingredients_serving", typ: 3.14 },
        { json: "energy", js: "energy", typ: 0 },
        { json: "energy-kcal", js: "energy-kcal", typ: 0 },
        { json: "energy-kcal_100g", js: "energy-kcal_100g", typ: 0 },
        { json: "energy-kcal_serving", js: "energy-kcal_serving", typ: 0 },
        { json: "energy-kcal_unit", js: "energy-kcal_unit", typ: "" },
        { json: "energy-kcal_value", js: "energy-kcal_value", typ: 0 },
        { json: "energy-kcal_value_computed", js: "energy-kcal_value_computed", typ: 3.14 },
        { json: "energy-kj", js: "energy-kj", typ: 0 },
        { json: "energy-kj_100g", js: "energy-kj_100g", typ: 0 },
        { json: "energy-kj_serving", js: "energy-kj_serving", typ: 0 },
        { json: "energy-kj_unit", js: "energy-kj_unit", typ: r("Unit") },
        { json: "energy-kj_value", js: "energy-kj_value", typ: 0 },
        { json: "energy-kj_value_computed", js: "energy-kj_value_computed", typ: 3.14 },
        { json: "energy_100g", js: "energy_100g", typ: 0 },
        { json: "energy_serving", js: "energy_serving", typ: 0 },
        { json: "energy_unit", js: "energy_unit", typ: r("Unit") },
        { json: "energy_value", js: "energy_value", typ: 0 },
        { json: "fat", js: "fat", typ: 0 },
        { json: "fat_100g", js: "fat_100g", typ: 0 },
        { json: "fat_serving", js: "fat_serving", typ: 3.14 },
        { json: "fat_unit", js: "fat_unit", typ: r("Unit") },
        { json: "fat_value", js: "fat_value", typ: 0 },
        { json: "fiber", js: "fiber", typ: 3.14 },
        { json: "fiber_100g", js: "fiber_100g", typ: 3.14 },
        { json: "fiber_serving", js: "fiber_serving", typ: 3.14 },
        { json: "fiber_unit", js: "fiber_unit", typ: r("Unit") },
        { json: "fiber_value", js: "fiber_value", typ: 3.14 },
        { json: "fruits-vegetables-legumes-estimate-from-ingredients_100g", js: "fruits-vegetables-legumes-estimate-from-ingredients_100g", typ: 0 },
        { json: "fruits-vegetables-legumes-estimate-from-ingredients_serving", js: "fruits-vegetables-legumes-estimate-from-ingredients_serving", typ: 0 },
        { json: "fruits-vegetables-nuts-estimate-from-ingredients_100g", js: "fruits-vegetables-nuts-estimate-from-ingredients_100g", typ: 0 },
        { json: "fruits-vegetables-nuts-estimate-from-ingredients_serving", js: "fruits-vegetables-nuts-estimate-from-ingredients_serving", typ: 0 },
        { json: "monounsaturated-fat", js: "monounsaturated-fat", typ: 0 },
        { json: "monounsaturated-fat_100g", js: "monounsaturated-fat_100g", typ: 0 },
        { json: "monounsaturated-fat_label", js: "monounsaturated-fat_label", typ: "" },
        { json: "monounsaturated-fat_serving", js: "monounsaturated-fat_serving", typ: 3.14 },
        { json: "monounsaturated-fat_unit", js: "monounsaturated-fat_unit", typ: r("Unit") },
        { json: "monounsaturated-fat_value", js: "monounsaturated-fat_value", typ: 0 },
        { json: "nova-group", js: "nova-group", typ: 0 },
        { json: "nova-group_100g", js: "nova-group_100g", typ: 0 },
        { json: "nova-group_serving", js: "nova-group_serving", typ: 0 },
        { json: "nutrition-score-fr", js: "nutrition-score-fr", typ: 0 },
        { json: "nutrition-score-fr_100g", js: "nutrition-score-fr_100g", typ: 0 },
        { json: "polyols", js: "polyols", typ: 0 },
        { json: "polyols_100g", js: "polyols_100g", typ: 0 },
        { json: "polyols_label", js: "polyols_label", typ: "" },
        { json: "polyols_serving", js: "polyols_serving", typ: 3.14 },
        { json: "polyols_unit", js: "polyols_unit", typ: r("Unit") },
        { json: "polyols_value", js: "polyols_value", typ: 0 },
        { json: "polyunsaturated-fat", js: "polyunsaturated-fat", typ: 3.14 },
        { json: "polyunsaturated-fat_100g", js: "polyunsaturated-fat_100g", typ: 3.14 },
        { json: "polyunsaturated-fat_label", js: "polyunsaturated-fat_label", typ: "" },
        { json: "polyunsaturated-fat_serving", js: "polyunsaturated-fat_serving", typ: 3.14 },
        { json: "polyunsaturated-fat_unit", js: "polyunsaturated-fat_unit", typ: r("Unit") },
        { json: "polyunsaturated-fat_value", js: "polyunsaturated-fat_value", typ: 3.14 },
        { json: "proteins", js: "proteins", typ: 3.14 },
        { json: "proteins_100g", js: "proteins_100g", typ: 3.14 },
        { json: "proteins_serving", js: "proteins_serving", typ: 3.14 },
        { json: "proteins_unit", js: "proteins_unit", typ: r("Unit") },
        { json: "proteins_value", js: "proteins_value", typ: 3.14 },
        { json: "salt", js: "salt", typ: 3.14 },
        { json: "salt_100g", js: "salt_100g", typ: 3.14 },
        { json: "salt_serving", js: "salt_serving", typ: 3.14 },
        { json: "salt_unit", js: "salt_unit", typ: r("Unit") },
        { json: "salt_value", js: "salt_value", typ: 3.14 },
        { json: "saturated-fat", js: "saturated-fat", typ: 3.14 },
        { json: "saturated-fat_100g", js: "saturated-fat_100g", typ: 3.14 },
        { json: "saturated-fat_serving", js: "saturated-fat_serving", typ: 3.14 },
        { json: "saturated-fat_unit", js: "saturated-fat_unit", typ: r("Unit") },
        { json: "saturated-fat_value", js: "saturated-fat_value", typ: 3.14 },
        { json: "sodium", js: "sodium", typ: 3.14 },
        { json: "sodium_100g", js: "sodium_100g", typ: 3.14 },
        { json: "sodium_serving", js: "sodium_serving", typ: 3.14 },
        { json: "sodium_unit", js: "sodium_unit", typ: r("Unit") },
        { json: "sodium_value", js: "sodium_value", typ: 3.14 },
        { json: "starch", js: "starch", typ: 0 },
        { json: "starch_100g", js: "starch_100g", typ: 0 },
        { json: "starch_label", js: "starch_label", typ: "" },
        { json: "starch_serving", js: "starch_serving", typ: 3.14 },
        { json: "starch_unit", js: "starch_unit", typ: r("Unit") },
        { json: "starch_value", js: "starch_value", typ: 0 },
        { json: "sugars", js: "sugars", typ: 3.14 },
        { json: "sugars_100g", js: "sugars_100g", typ: 3.14 },
        { json: "sugars_serving", js: "sugars_serving", typ: 3.14 },
        { json: "sugars_unit", js: "sugars_unit", typ: r("Unit") },
        { json: "sugars_value", js: "sugars_value", typ: 3.14 },
    ], false),
    "Nutriscore": o([
        { json: "category_available", js: "category_available", typ: 0 },
        { json: "data", js: "data", typ: r("Data") },
        { json: "grade", js: "grade", typ: "" },
        { json: "nutrients_available", js: "nutrients_available", typ: 0 },
        { json: "nutriscore_applicable", js: "nutriscore_applicable", typ: 0 },
        { json: "nutriscore_computed", js: "nutriscore_computed", typ: 0 },
        { json: "score", js: "score", typ: 0 },
    ], false),
    "Data": o([
        { json: "energy", js: "energy", typ: u(undefined, 0) },
        { json: "energy_points", js: "energy_points", typ: u(undefined, 0) },
        { json: "energy_value", js: "energy_value", typ: u(undefined, 0) },
        { json: "fiber", js: "fiber", typ: u(undefined, 3.14) },
        { json: "fiber_points", js: "fiber_points", typ: u(undefined, 0) },
        { json: "fiber_value", js: "fiber_value", typ: u(undefined, 3.14) },
        { json: "fruits_vegetables_nuts_colza_walnut_olive_oils", js: "fruits_vegetables_nuts_colza_walnut_olive_oils", typ: u(undefined, 0) },
        { json: "fruits_vegetables_nuts_colza_walnut_olive_oils_points", js: "fruits_vegetables_nuts_colza_walnut_olive_oils_points", typ: u(undefined, 0) },
        { json: "fruits_vegetables_nuts_colza_walnut_olive_oils_value", js: "fruits_vegetables_nuts_colza_walnut_olive_oils_value", typ: u(undefined, 0) },
        { json: "is_beverage", js: "is_beverage", typ: 0 },
        { json: "is_cheese", js: "is_cheese", typ: 0 },
        { json: "is_fat", js: "is_fat", typ: u(undefined, 0) },
        { json: "is_water", js: "is_water", typ: 0 },
        { json: "negative_points", js: "negative_points", typ: 0 },
        { json: "positive_points", js: "positive_points", typ: 0 },
        { json: "proteins", js: "proteins", typ: u(undefined, 3.14) },
        { json: "proteins_points", js: "proteins_points", typ: u(undefined, 0) },
        { json: "proteins_value", js: "proteins_value", typ: u(undefined, 3.14) },
        { json: "saturated_fat", js: "saturated_fat", typ: u(undefined, 3.14) },
        { json: "saturated_fat_points", js: "saturated_fat_points", typ: u(undefined, 0) },
        { json: "saturated_fat_value", js: "saturated_fat_value", typ: u(undefined, 3.14) },
        { json: "sodium", js: "sodium", typ: u(undefined, 0) },
        { json: "sodium_points", js: "sodium_points", typ: u(undefined, 0) },
        { json: "sodium_value", js: "sodium_value", typ: u(undefined, 0) },
        { json: "sugars", js: "sugars", typ: u(undefined, 3.14) },
        { json: "sugars_points", js: "sugars_points", typ: u(undefined, 0) },
        { json: "sugars_value", js: "sugars_value", typ: u(undefined, 3.14) },
        { json: "components", js: "components", typ: u(undefined, r("Components")) },
        { json: "count_proteins", js: "count_proteins", typ: u(undefined, 0) },
        { json: "count_proteins_reason", js: "count_proteins_reason", typ: u(undefined, "") },
        { json: "is_fat_oil_nuts_seeds", js: "is_fat_oil_nuts_seeds", typ: u(undefined, 0) },
        { json: "is_red_meat_product", js: "is_red_meat_product", typ: u(undefined, 0) },
        { json: "negative_points_max", js: "negative_points_max", typ: u(undefined, 0) },
        { json: "positive_nutrients", js: "positive_nutrients", typ: u(undefined, a("")) },
        { json: "positive_points_max", js: "positive_points_max", typ: u(undefined, 0) },
        { json: "grade", js: "grade", typ: u(undefined, r("EcoscoreGrade")) },
        { json: "score", js: "score", typ: u(undefined, 0) },
    ], false),
    "Components": o([
        { json: "negative", js: "negative", typ: a(r("Tive")) },
        { json: "positive", js: "positive", typ: a(r("Tive")) },
    ], false),
    "Tive": o([
        { json: "id", js: "id", typ: "" },
        { json: "points", js: "points", typ: 0 },
        { json: "points_max", js: "points_max", typ: 0 },
        { json: "unit", js: "unit", typ: r("Unit") },
        { json: "value", js: "value", typ: 3.14 },
    ], false),
    "NutriscoreData": o([
        { json: "components", js: "components", typ: r("Components") },
        { json: "count_proteins", js: "count_proteins", typ: 0 },
        { json: "count_proteins_reason", js: "count_proteins_reason", typ: "" },
        { json: "is_beverage", js: "is_beverage", typ: 0 },
        { json: "is_cheese", js: "is_cheese", typ: 0 },
        { json: "is_fat_oil_nuts_seeds", js: "is_fat_oil_nuts_seeds", typ: 0 },
        { json: "is_red_meat_product", js: "is_red_meat_product", typ: 0 },
        { json: "is_water", js: "is_water", typ: 0 },
        { json: "negative_points", js: "negative_points", typ: 0 },
        { json: "negative_points_max", js: "negative_points_max", typ: 0 },
        { json: "positive_nutrients", js: "positive_nutrients", typ: a("") },
        { json: "positive_points", js: "positive_points", typ: 0 },
        { json: "positive_points_max", js: "positive_points_max", typ: 0 },
        { json: "grade", js: "grade", typ: u(undefined, r("EcoscoreGrade")) },
        { json: "score", js: "score", typ: u(undefined, 0) },
    ], false),
    "OpenFoodFactsProductPackaging": o([
        { json: "material", js: "material", typ: "" },
        { json: "number_of_units", js: "number_of_units", typ: 0 },
        { json: "recycling", js: "recycling", typ: "" },
        { json: "shape", js: "shape", typ: "" },
    ], false),
    "PackagingsMaterials": o([
        { json: "all", js: "all", typ: r("CategoryProperties") },
        { json: "en:paper-or-cardboard", js: "en:paper-or-cardboard", typ: r("CategoryProperties") },
        { json: "en:plastic", js: "en:plastic", typ: r("CategoryProperties") },
    ], false),
    "SelectedImages": o([
        { json: "front", js: "front", typ: r("Front") },
        { json: "nutrition", js: "nutrition", typ: r("Nutrition") },
    ], false),
    "Front": o([
        { json: "display", js: "display", typ: r("FrontDisplay") },
        { json: "small", js: "small", typ: r("FrontDisplay") },
        { json: "thumb", js: "thumb", typ: r("FrontDisplay") },
    ], false),
    "FrontDisplay": o([
        { json: "es", js: "es", typ: "" },
    ], false),
    "Nutrition": o([
        { json: "display", js: "display", typ: r("NutritionDisplay") },
        { json: "small", js: "small", typ: r("NutritionDisplay") },
        { json: "thumb", js: "thumb", typ: r("NutritionDisplay") },
    ], false),
    "NutritionDisplay": o([
        { json: "bg", js: "bg", typ: "" },
        { json: "es", js: "es", typ: "" },
    ], false),
    "Vegan": [
        "maybe",
        "yes",
    ],
    "EcoscoreGrade": [
        "c",
    ],
    "Uploader": [
        "kiliweb",
        "roto",
    ],
    "Unit": [
        "%",
        "g",
        "kJ",
    ],
};
