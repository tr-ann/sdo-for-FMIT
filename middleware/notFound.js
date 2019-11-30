import NotFoundError from '../core/errors/4xx/notFound';

export default (request, response) => {
    throw new NotFoundError('Router not found, incorrect request URL');
};