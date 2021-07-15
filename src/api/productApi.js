import axiosClient from "./axiosClient";

const productsApi = {
  async getAll(params) {
    const newParams = { ...params };
    newParams._start =
      !newParams._page || newParams._page <= 1
        ? 0
        : (newParams._page - 1) * (newParams._limit || 10);

    delete newParams._page;

    const products = await axiosClient.get(`/products`, { params: newParams });
    const count = await axiosClient.get(`/products/count`, {
      params: newParams,
    });

    return {
      data: products,
      pagination: {
        page: params._page,
        total: count,
        limit: params._limit,
      },
    };
  },

  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `/products`;
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/products`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productsApi;
