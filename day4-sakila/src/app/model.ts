export interface Summary {
    film_id?: number;
    title?: string;
}

export interface Film {
    film_id?: number;
    title?: string;
    description?: string;
    release_year?: number;
    language_id?: number;
    original_language_id?: number;
    rental_duration?: number;
    rental_rate?: number;
    length?: number;
    replacement_cost?: number;
    rating?: string;
    special_features?: string;
    last_update?: string;
}