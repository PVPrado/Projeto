import * as sinon from 'sinon';
import * as chai from 'chai';
import TeamModel from '../database/models/TeamModel';
import TeamService from '../database/services/TeamService';
import mockTeam from './mocks/mockTeam'

describe('Teste da camada de serviço: Read all teams', () => {
  afterEach( () => {
    sinon.restore();
  });

  it('Test 1: Deve ler uma lista com todos os times', async () => {

    sinon.stub(TeamModel, 'findAll').resolves(mockTeam as TeamModel[]);
    const service = new TeamService();
    const result = await service.readAll();

    chai.expect(result).to.be.equal(mockTeam);
    chai.expect(result.length).to.be.equal(1)
  })

  it('Test 2: Deve ler o time com ID correspondente', async () => {

    const inputMock: number = 1;

    sinon.stub(TeamModel, 'findOne').resolves(mockTeam[0] as TeamModel)
    const service = new TeamService();
    const result = await service.readById(inputMock);
    chai.expect(result).to.be.equal(mockTeam[0]);
  })
})