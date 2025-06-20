import { DimensionValue, StyleSheet, Text, View } from 'react-native';

interface Props {
  correctAnswers: number;
  totalQuestions: number;
  testName?: string;
  timeTaken?: number;
}

export function ResultsCard({
  correctAnswers,
  totalQuestions,
  testName,
  timeTaken,
}: Props) {
  return (
    <View style={resultsCard.root}>
      {/* Modul & Waktu dalam satu baris */}
      {(testName || timeTaken !== undefined) && (
        <View style={resultsCard.headerRow}>
          {testName && (
            <Text style={resultsCard.moduleText}>
              Modul: {formatTestName(testName)}
            </Text>
          )}
          {timeTaken !== undefined && (
            <Text style={[resultsCard.answersText, { color: '#000000' }]}>
              {Math.floor(timeTaken / 1000)} detik
            </Text>
          )}
        </View>
      )}

      {/* Jawaban Benar & Salah */}
      <View>
        <Text style={[resultsCard.answersText, { color: '#16a34a', marginBottom: 1 }]}>
          - {correctAnswers} Jawaban Benar
        </Text>
        <Text style={[resultsCard.answersText, { color: '#dc2626' }]}>
          - {totalQuestions - correctAnswers} Jawaban Salah
        </Text>
      </View>

      {/* Persentase & ProgressBar */}
      <View style={resultsCard.percentContainer}>
        <Text style={resultsCard.percentText}>
          {Math.round((correctAnswers / totalQuestions) * 100)}%
        </Text>
        <ProgressBar correctAnswers={correctAnswers} totalQuestions={totalQuestions} />
      </View>
    </View>
  );
}

function ProgressBar({
  correctAnswers,
  totalQuestions,
}: {
  correctAnswers: number;
  totalQuestions: number;
}) {
  const width: DimensionValue = `${Math.round((correctAnswers / totalQuestions) * 100)}%`;
  return (
    <View style={progressBar.root}>
      <View style={[progressBar.progress, { width }]} />
    </View>
  );
}

// Format nama kuis
function formatTestName(testName: string): string {
  switch (testName) {
    case 'flags':
      return 'Komputer';
    case 'solarSystem':
      return 'Keyboard';
    default:
      return testName;
  }
}

const resultsCard = StyleSheet.create({
  root: {
    width: '100%',
    gap: 16,
    padding: 16,
    borderRadius: 24,
    borderColor: '#cbd2d9',
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  moduleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  answersText: {
    fontSize: 12,
  },
  percentContainer: {
    gap: 8,
    width: '100%',
    alignSelf: 'center',
  },
  percentText: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

const progressBar = StyleSheet.create({
  root: {
    width: '100%',
    height: 8,
    borderRadius: 9999,
    backgroundColor: '#f87171',
  },
  progress: {
    height: 8,
    borderRadius: 9999,
    backgroundColor: '#4ade80',
  },
});
