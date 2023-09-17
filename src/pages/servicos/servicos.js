import React, { useState, useEffect } from 'react';
import './servicos.css';
import logo from '../../assets/logo1.png';
import Footer from '../../components/footer/footer';
import ListServicos from '../../components/servicos/listServices.js';
import migrationImage from '../../assets/migration.png'
import operationImage from '../../assets/cloudops.png'
import modernizationImage from '../../assets/vnn-saas.png'
import Header from '../../components/header/header';

const ValcannCloudMigrationForm = () => { 
  const [instanceType, setInstanceType] = useState('db.t3.medium');
  const [numRDSInstances, setNumRDSInstances] = useState(0);
  const [storage, setStorage] = useState(0);
  const [backupStorage, setBackupStorage] = useState(0);

  const instancePrices = {
    'db.t3.medium': 400,
    'db.t3.large': 700,
    'db.t3.2xlarge': 900,
  };
  const calculatePrice = () => {
    const basePrice = instancePrices[instanceType];
    const finalPrice = basePrice * (numRDSInstances +( 0.03 * storage) + (0.01 * backupStorage));
    const formattedPrice = finalPrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return `${formattedPrice}`;
  };

  return (
    <>
      
      <label htmlFor="intance">Instâncias :</label>
          <select name='intance' value={instanceType} onChange={(e) => setInstanceType(e.target.value)}>
            <option value={'db.t3.medium'}>db.t3.medium</option>
            <option value={'db.t3.large'}>db.t3.large</option>
            <option value={'db.t3.2xlarge'}>db.t3.2xlarge</option>
          </select>
          <label htmlFor='numRDSInstances'> Numero de instancias </label>
          <input type='number' id='numRDSInstances' name='numRDSInstances'  onChange={(e => setNumRDSInstances(Number(e.target.value)))} />

          <label htmlFor='storage'> Armazenamento <small> Em Gigabites </small> </label>
          <input type='number' id='storage' name='storage'  onChange={(e) => setStorage(Number(e.target.value))} />
          <label htmlFor='backup'> Backup <small> Em Gigabites </small> </label>
          <input type='number' id='backup' name='backup' onChange={(e) => setBackupStorage(Number(e.target.value))}  />

          <h3>Preço Final: {calculatePrice()}</h3>
    </>
  );
};

const ValcannCloudOperationsForm = () => {
  const [numEC2Instances, setNumEC2Instances] = useState(0);
  const [selectedOS, setSelectedOS] = useState('Linux');
  const [selectedInstanceType, setSelectedInstanceType] = useState('t3a.nano');
  const [price, setPrice] = useState(0);

  const instancePrices = {
    't3a.nano': 500,
    't3a.micro': 700,
    't3a.small': 1200,
  };

  const osPrices = {
    'Linux': 700,
    'Windows Server': 900,
  };

  const calculatePrice = () => {
    const instancePrice = instancePrices[selectedInstanceType];
    const osPrice = osPrices[selectedOS];
    const totalPrice = numEC2Instances * (instancePrice + osPrice);
    setPrice(totalPrice);
  };

  const handleNumEC2InstancesChange = (e) => {
    setNumEC2Instances(Number(e.target.value));
  };

  const handleOSChange = (e) => {
    setSelectedOS(e.target.value);
  };

  const handleInstanceTypeChange = (e) => {
    setSelectedInstanceType(e.target.value);
  };

  useEffect(() => {
    calculatePrice();
  }, [numEC2Instances, selectedOS, selectedInstanceType]);

  return (
    <>
      <label htmlFor="numEC2Instances">Número de instâncias EC2:</label>
      <input
        type="number"
        id="numEC2Instances"
        value={numEC2Instances}
        onChange={handleNumEC2InstancesChange}
      />

      <label htmlFor="os">Sistema Operacional:</label>
      <select
        id="os"
        value={selectedOS}
        onChange={handleOSChange}
      >
        <option value="Linux">Linux</option>
        <option value="Windows Server">Windows Server</option>
      </select>

      <label htmlFor="instanceType">Tipo de Instância:</label>
      <select
        id="instanceType"
        value={selectedInstanceType}
        onChange={handleInstanceTypeChange}
      >
        <option value="t3a.nano">t3a.nano</option>
        <option value="t3a.micro">t3a.micro</option>
        <option value="t3a.small">t3a.small</option>
      </select>

      <h3>Preço Total: R$ {price}</h3>
    </>
  );
};

const ValcannSaaSFactoryForm = () => {
  const [numEKSClusters, setNumEKSClusters] = useState(0);
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    const totalPrice = numEKSClusters * 520;
    setPrice(totalPrice);
  };

  useEffect(() => {
    calculatePrice();
  }, [numEKSClusters]);

  return (
    <div>
      <label htmlFor="numEKSClusters">Número de Clusters EKS:</label>
      <input
        type="number"
        id="numEKSClusters"
        value={numEKSClusters}
        onChange={(e) => setNumEKSClusters(Number(e.target.value))}
      />

      <h3>Preço Total: R$ {price}</h3>
    </div>
  );
};

export default function Servicos() {
    
  const Products = [
    {
      image: migrationImage,
      category: 'MIGRAÇÃO',
      name: 'Valcann Cloud Migration',
      description: 'Planejamento, execução e otimização de estratégias de migração para a Nuvem. Construção de jornada de adoção de Nuvem, plano de execução e migração.',
      form : <ValcannCloudMigrationForm />, 
      modalDescription: (
        <>
          <h4>
            Planejar
          </h4>
          <span>
          Dimensionamento (rightsizing) e planejamento de capacidade, design de arquitetura da solução (AS IS e TO BE) e construção do roadmap de implantação, considerando todas as restrições de negócios e de tecnologia envolvidas no projeto.
          </span>

          <h4>
            Construir
          </h4>
          <span>
            Construção do projeto arquitetural proposto. Implementação da infraestrutura, considerando o planejamento especificado no projeto. Alinhamento da construção às práticas de Well-Archictected (Excelência Operacional, Segurança, Resiliência, Performance e Otimização de Custos).
          </span>

          <h4>
            Executar
          </h4>
          <span>
            Execução e otimização das cargas de trabalhos implementadas na nuvem. Entrada em produção com operação assistida, 24 x 7, com suporte especializado e dedicado.
          </span>

          <h3>Alcance seus objetivos empresariais</h3>

          <h4>Crie novos fluxos de receita</h4>
          <span>Responda rapidamente a novos insights empresariais, demandas de clientes e mudança das condições do mercado para gerar novos fluxos de receita. Com a Nuvem, você pode testar e iterar rapidamente ideias em um ambiente ágil e escalar facilmente as novas ideias empresariais mais promissoras.</span>
       
          <h4>Aumente a eficiência operacional</h4>
          <span>Ao migrar para a Nuvem, você obtém benefícios que vão além da redução de custos de TI. Com a Nuvem, você aprimora a produtividade da força de trabalho com equipes de desenvolvimento ágeis, acelera os ciclos de desenvolvimento para potencializar o acesso ao mercado e aumenta a resiliência operacional.</span>
        
          <h4>Reduza o risco empresarial</h4>
          <span>Proteger seus dados e manter a confiança dos clientes e das partes interessadas é essencial para a sua empresa. A nuvem oferece os produtos e serviços mais flexíveis e seguros, apoiados por um conjunto abrangente de serviços de segurança, conformidade e governança.</span>
       
       
        </>
      )
    },
    {
      image: operationImage,
      category: 'OPERAÇÃO',
      name: 'Valcann Cloud Operations',
      price: '',
      description: 'Com o Valcann CloudOps, entregamos serviços de gerenciamento contínuo de infraestrutura na Nuvem. Cloud NOC, Segurança, Automação e Orquestração, Monitoramento.',
      form: <ValcannCloudOperationsForm/>,
      modalDescription: (
        <>
          <h3>Gerenciamento contínuo de infraestrutura fim a fim na nuvem, considerando melhores práticas de arquitetura e gestão completa de ambientes operacionais.</h3>
          <h4>
          Valcann CloudOps
          </h4>
          <span>
          Dimensionamento (rightsizing) e planejamento de capacidade, design de arquitetura da solução (AS IS e TO BE) e construção do roadmap de implantação, considerando todas as restrições de negócios e de tecnologia envolvidas no projeto.
          </span>

          <h4>
            Cloud NOC
          </h4>
          <span>
            Administração de infraestrutura como serviço na Nuvem. Gerenciamento contínuo de toda a camada de infraestrutura, desde os serviços de Nuvem até a camada de ambiente operacional.
          </span>

          <h4>
            Segurança
          </h4>
          <span>
          Implementação e administração de políticas de seguranças proativas para garantia de continuidade e alta disponibilidade. Monitoramento e gerenciamento de processos de segurança da informação.
          </span>

          <h4>Automação e Orquestração</h4>
          <span>Responda rapidamente a novos insights empresariais, demandas de clientes e mudança das condições do mercado para gerar novos fluxos de receita. Com a Nuvem, você pode testar e iterar rapidamente ideias em um ambiente ágil e escalar facilmente as novas ideias empresariais mais promissoras.</span>
       
          <h4>Aumente a eficiência operacional</h4>
          <span>Aplicação de scripts e rotinas proativas no ambiente de Nuvem. Auto scaling, load balancing e gestão de configuração. Gerenciamento de infraestrutura como código.</span>
        
          <h4>Suporte Especializado</h4>
          <span>Atendimento 24 x 7 para incidentes, implementação de camada de monitoramento, sistemas de alertas e mensageria para administração e gestão do ambiente de infraestrutura em Nuvem, desde a camada da Nuvem até o ambiente operacional.</span>
       
       
        </>
      )
    },
    {
      image : modernizationImage,
      category: 'MODERNIZAÇÃO',
      name: 'Valcann SaaS Factory',
      price: '',
      description: 'Soluções especializadas de modernização de aplicações para Software como Serviço (SaaS) e DevOps. Modernização de aplicações como serviço.',
      form : <ValcannSaaSFactoryForm/>,
      modalDescription: (
        <>
          <h3>Soluções especializadas de modernização de aplicações para Software como Serviço (SaaS) e DevOps.</h3>
          <h4>Implementação de processos e estratégias de arquitetura de software como serviço e modernização de aplicações.</h4>
          <span>
          A Valcann implementa as melhores práticas de como implantar e administrar software como serviço. Com um time de arquitetos de soluções de software como serviço (SaaS), podemos orientar e acelerar a entrega de SaaS na Nuvem. Os projetos do SaaS Factory são oferecidos por meio de modelos de entrega de 1 para 1 (uma aplicação para um cliente, single tenant) e de 1 para N (uma aplicação para vários clientes, multi tenant). O SaaS Factory oferece recursos abrangentes para execução técnica na criação, migração e modernização de SaaS na Nuvem.
          </span>
          <h4>Modernização de Aplicações como Serviço</h4>
          <span>
          Embora as opções de arquitetura de SaaS sejam diversificadas, há alguns fatores evidentes que todo arquiteto de SaaS precisará considerar para criar soluções de SaaS. Para ajudar a sua empresa a navegar por esse cenário e desenvolver uma solução que atenda aos objetivos de seu produto, o SaaS Factory oferece vários recursos de ativação para capacitar e habilitar cada estágio do seu SaaS na jornada da Nuvem.
          </span>
          
        </>
      )
    },
  ];
  return (
    <>
    <Header />
     <div className="content servicos">
     
     <div className='Header'>
      <section  className="banner">
      </section>
      <div className="title">
        <img src={logo} alt="Logo" />
        <span>Nossos Serviços</span>
      </div>
     </div>

     <div className="subtitle">
       <h1>Conheça os nossos serviços</h1>
       <span>
         Com os serviços da Valcann, você recebe suporte total em toda a sua jornada na Nuvem, livrando-se da preocupação e da complexidade de fazer isso por conta própria. Não importa qual seu estágio de adoção e desafio, nossas soluções podem ajudar a sua empresa a extrair o máximo da Nuvem.
       </span>
       <h3>Somos especialistas em Computação em Nuvem</h3>
       <span>Saiba mais como nossas soluções podem transformar a tecnologia da sua empresa e habilitar inovação.
      Entre em contato conosco e conheça nossas soluções.
      </span>
     </div>

     <ListServicos products={Products} />

     
   </div>
   <Footer />
    </>
   

    
  );
}