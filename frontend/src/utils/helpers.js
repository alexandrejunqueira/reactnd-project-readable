import * as moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-BR');

const formatDate = date => moment(date).format('D [de] MMMM [de] YYYY');

export const formatDetailedPostInfo = info => {
  const author = `Publicado por ${info.author}`;
  const date = `no dia ${formatDate(info.timestamp)}`;
  const category = `na categoria: ${info.category}`;
  const score = `Pontuação: ${info.voteScore}`;
  return `${author} ${date} ${category} - ${score}`;
};

export const formatPostInfo = info => {
  const author = `Publicado por ${info.author}`;
  const date = `no dia ${formatDate(info.timestamp)}`;
  const category = `na categoria: ${info.category}`;
  return `${author} ${date} ${category}`;
};

export const formatCommentInfo = info => {
  const author = `Por ${info.author}`;
  const date = `no dia ${formatDate(info.timestamp)}`;
  const score = `Pontuação: ${info.voteScore}`;
  return `${author} ${date} - ${score}`;
};

