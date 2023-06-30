import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import mock from '../../mocks/product.mock';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('adiciona um novo produto', async function () {
    // Arrange
    const httpRequestBody = mock.newProductMock;
    const mockFindOneReturn = ProductModel.build(mock.productDBMock);
    sinon.stub(ProductModel, 'create').resolves(mockFindOneReturn);

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.deep.equal(mock.productResponseMock);
  })
});
