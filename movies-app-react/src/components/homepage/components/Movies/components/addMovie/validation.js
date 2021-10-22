import * as Yup from 'yup';

const validationSchema = Yup.object.shape({
    title: Yup.string().required("Title is required!"),
    release_date: Yup.date().required("Release date is required!"),
    poster_pathle: Yup.string().required("Url is required!"),
    vote_average: Yup.number().required("Rating is required!"),
    genres: Yup.string().required("Genre is required!"),
    runtime: Yup.number().required("Runtime is required!"),
    overview: Yup.string().required("Overviw is required!"),
})