import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    title: Yup.string().required(" is required!"),
    release_date: Yup.date().required(" is required!"),
    poster_path: Yup.string().required(" is required!"),
    vote_average: Yup.number().required(" is required!"),
    genres: Yup.array().min(1," is required!"),
    runtime: Yup.number().required(" is required!"),
    overview: Yup.string().required(" is required!"),
});

export default validationSchema;