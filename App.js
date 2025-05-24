import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import {
  MessageCircle,
  Scale,
  Gavel,
  User,
  History,
  Share2,
  Copy,
  Info,
  Home,
  Bookmark,
  LogIn,
  UserPlus,
  Send,
  Sparkles,
} from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

const PerplexityLawyer = () => {
  const [question, setQuestion] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const lawyerResponses = [
    "I object... to how amazing that question is! Let me overrule your confusion. 🏛️",
    "My briefcase is heavier than your arguments, but I'll still help you out! 💼",
    "According to case law established by Me v. Common Sense, I'd say you're onto something! 📚",
    "Let me approach the bench... of my legal knowledge to answer that! ⚖️",
    "Order in the court! Your question has been sustained. 👨‍⚖️",
    "That's a motion I can definitely second! Let me deliberate on this... 🤔",
    "Your question is so good, it should be entered as Exhibit A! 📋"
  ];

  const handleAskQuestion = () => {
    if (question.trim() === '') return;

    setIsTyping(true);
    setShowResponse(false);

    setTimeout(() => {
      setIsTyping(false);
      setShowResponse(true);
    }, 2000);
  };

  const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random() * lawyerResponses.length);
    return lawyerResponses[randomIndex];
  };

  const TypingIndicator = () => {
    const dot1 = new Animated.Value(0);
    const dot2 = new Animated.Value(0);
    const dot3 = new Animated.Value(0);

    useEffect(() => {
      const animate = (dot, delay) => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(dot, {
              toValue: 1,
              duration: 400,
              delay,
              useNativeDriver: true,
            }),
            Animated.timing(dot, {
              toValue: 0,
              duration: 400,
              useNativeDriver: true,
            }),
          ])
        ).start();
      };

      animate(dot1, 0);
      animate(dot2, 100);
      animate(dot3, 200);
    }, []);

    return (
      <View style={styles.typingContainer}>
        <View style={styles.typingDots}>
          <Animated.View style={[styles.dot, { opacity: dot1 }]} />
          <Animated.View style={[styles.dot, { opacity: dot2 }]} />
          <Animated.View style={[styles.dot, { opacity: dot3 }]} />
        </View>
        <Text style={styles.typingText}>⚖️ Consulting legal precedents...</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="light-content" backgroundColor="#f97316" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <View style={styles.logoContainer}>
              <Scale color="white" size={32} />
            </View>
            <Text style={styles.headerTitle}>Perplexity's Lawyer</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.headerButton}>
              <LogIn color="white" size={16} />
              <Text style={styles.headerButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>

          {/* Hero Section */}
          <View style={styles.heroSection}>
            <View style={styles.card}>
              <View style={styles.heroContent}>
                <View style={styles.heroText}>
                  <Text style={styles.heroTitle}>Legal Advice</Text>
                  <Text style={styles.heroSubtitle}>with a side of humor</Text>
                  <View style={styles.tagContainer}>
                    <Sparkles color="#ea580c" size={20} />
                    <Text style={styles.tagText}>Where wit meets legal wisdom</Text>
                  </View>
                </View>
                <View style={styles.heroIcon}>
                  <View style={styles.iconContainer}>
                    <Scale color="white" size={64} />
                  </View>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>ESQ.</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Character Section */}
          <View style={styles.characterSection}>
            <View style={styles.card}>
              <View style={styles.characterContent}>
                <View style={styles.avatar}>
                  <View style={styles.avatarContainer}>
                    <User color="white" size={48} />
                  </View>
                  <View style={styles.avatarBadge}>
                    <Text style={styles.avatarBadgeText}>ESQ.</Text>
                  </View>
                </View>
                <View style={styles.speechBubble}>
                  <Text style={styles.speechText}>
                    "I hereby swear to give you the funniest legal advice. What's on your docket today?"
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Question Input */}
          <View style={styles.inputSection}>
            <View style={styles.card}>
              <View style={styles.inputHeader}>
                <Scale color="#ea580c" size={20} />
                <Text style={styles.inputHeaderText}>Present Your Case</Text>
              </View>
              <View style={styles.inputContent}>
                <View style={styles.textInputContainer}>
                  <TextInput
                    value={question}
                    onChangeText={setQuestion}
                    placeholder="State your case here..."
                    placeholderTextColor="#6b7280"
                    multiline
                    style={styles.textInput}
                    maxLength={500}
                  />
                  <TouchableOpacity
                    onPress={handleAskQuestion}
                    disabled={question.trim() === ''}
                    style={[
                      styles.sendButton,
                      question.trim() === '' && styles.sendButtonDisabled
                    ]}
                  >
                    <Send color="white" size={20} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={handleAskQuestion}
                  disabled={question.trim() === ''}
                  style={[
                    styles.mainButton,
                    question.trim() === '' && styles.mainButtonDisabled
                  ]}
                >
                  <Gavel color="white" size={24} />
                  <Text style={styles.mainButtonText}>Enter the Courtroom</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Typing Indicator */}
          {isTyping && (
            <View style={styles.responseSection}>
              <View style={styles.card}>
                <View style={styles.responseHeader}>
                  <Gavel color="#ea580c" size={20} />
                  <Text style={styles.responseHeaderText}>Legal Opinion</Text>
                </View>
                <View style={styles.responseContent}>
                  <TypingIndicator />
                </View>
              </View>
            </View>
          )}

          {/* Response */}
          {showResponse && (
            <View style={styles.responseSection}>
              <View style={styles.card}>
                <View style={styles.responseHeader}>
                  <Gavel color="#ea580c" size={20} />
                  <Text style={styles.responseHeaderText}>Legal Opinion</Text>
                </View>
                <View style={styles.responseContent}>
                  <View style={styles.responseBody}>
                    <View style={styles.judgeAvatar}>
                      <User color="white" size={24} />
                    </View>
                    <View style={styles.responseText}>
                      <Text style={styles.judgeTitle}>The Honorable Judge Perplexity rules:</Text>
                      <View style={styles.responseBubble}>
                        <Text style={styles.responseMessage}>
                          {getRandomResponse()}
                        </Text>
                        <View style={styles.responseEmojis}>
                          <Text style={styles.emoji}>⚖️</Text>
                          <Text style={styles.emoji}>👨‍⚖️</Text>
                          <Text style={styles.emoji}>📜</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.responseActions}>
                    <TouchableOpacity style={styles.actionButton}>
                      <Share2 color="#ea580c" size={20} />
                      <Text style={styles.actionButtonText}>Share</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                      <Copy color="#ea580c" size={20} />
                      <Text style={styles.actionButtonText}>Copy</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}

          {/* Fun Fact */}
          <View style={styles.funFactSection}>
            <View style={styles.card}>
              <View style={styles.funFactHeader}>
                <Info color="#2563eb" size={20} />
                <Text style={styles.funFactHeaderText}>Legal Fun Fact</Text>
              </View>
              <View style={styles.funFactContent}>
                <Text style={styles.funFactText}>
                  The phrase "The whole truth and nothing but the truth" dates back to Old English courts in the 13th century. How's that for legal precedent? 📚⚖️
                </Text>
              </View>
            </View>
          </View>

          {/* CTA Section */}
          <View style={styles.ctaSection}>
            <View style={styles.ctaCard}>
              <Text style={styles.ctaTitle}>Need more legal humor?</Text>
              <Text style={styles.ctaDescription}>
                Create an account to save your favorite responses and get premium legal jokes!
              </Text>
              <TouchableOpacity style={styles.ctaButton}>
                <Text style={styles.ctaButtonText}>Sign Up Now</Text>
              </TouchableOpacity>
            </View>
          </View>

        </Animated.View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerContent}>
          <TouchableOpacity style={styles.footerButton}>
            <Home color="white" size={24} />
            <Text style={styles.footerButtonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <History color="white" size={24} />
            <Text style={styles.footerButtonText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerCenterButton}>
            <MessageCircle color="#f97316" size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Bookmark color="white" size={24} />
            <Text style={styles.footerButtonText}>Saved</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <User color="white" size={24} />
            <Text style={styles.footerButtonText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7ed',
  },
  header: {
    backgroundColor: '#f97316',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 16,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerRight: {
    flexDirection: 'row',
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginLeft: 8,
  },
  headerButtonText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 24,
  },
  heroSection: {
    marginBottom: 32,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  heroContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heroText: {
    flex: 1,
    marginRight: 24,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#ea580c',
    fontStyle: 'italic',
    fontWeight: '300',
    marginBottom: 16,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fed7aa',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  tagText: {
    color: '#c2410c',
    fontWeight: '600',
    marginLeft: 8,
  },
  heroIcon: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 128,
    height: 128,
    backgroundColor: '#f97316',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  badge: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    backgroundColor: '#ea580c',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'white',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  characterSection: {
    marginBottom: 32,
  },
  characterContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    marginRight: 24,
  },
  avatarContainer: {
    width: 96,
    height: 128,
    backgroundColor: '#374151',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  avatarBadge: {
    position: 'absolute',
    bottom: -8,
    right: -8,
    backgroundColor: '#ea580c',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'white',
  },
  avatarBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  speechBubble: {
    flex: 1,
    backgroundColor: '#fed7aa',
    borderRadius: 16,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#f97316',
  },
  speechText: {
    color: '#1f2937',
    fontSize: 18,
    lineHeight: 26,
  },
  inputSection: {
    marginBottom: 32,
  },
  inputHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(249, 115, 22, 0.1)',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(249, 115, 22, 0.2)',
    marginHorizontal: -24,
    marginTop: -24,
    marginBottom: 24,
  },
  inputHeaderText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginLeft: 12,
  },
  inputContent: {
    gap: 16,
  },
  textInputContainer: {
    position: 'relative',
  },
  textInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 2,
    borderColor: '#fed7aa',
    borderRadius: 16,
    padding: 16,
    paddingRight: 60,
    fontSize: 16,
    color: '#1f2937',
    textAlignVertical: 'top',
    minHeight: 120,
  },
  sendButton: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    backgroundColor: '#f97316',
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  sendButtonDisabled: {
    backgroundColor: '#9ca3af',
  },
  mainButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f97316',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  mainButtonDisabled: {
    backgroundColor: '#9ca3af',
  },
  mainButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  responseSection: {
    marginBottom: 32,
  },
  responseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(249, 115, 22, 0.1)',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(249, 115, 22, 0.2)',
    marginHorizontal: -24,
    marginTop: -24,
    marginBottom: 24,
  },
  responseHeaderText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginLeft: 12,
  },
  responseContent: {
    gap: 16,
  },
  typingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fed7aa',
    padding: 16,
    borderRadius: 16,
  },
  typingDots: {
    flexDirection: 'row',
    marginRight: 16,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: '#f97316',
    borderRadius: 4,
    marginHorizontal: 2,
  },
  typingText: {
    color: '#4b5563',
    fontStyle: 'italic',
  },
  responseBody: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  judgeAvatar: {
    width: 48,
    height: 48,
    backgroundColor: '#374151',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  responseText: {
    flex: 1,
  },
  judgeTitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  responseBubble: {
    backgroundColor: '#fed7aa',
    borderRadius: 16,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#f97316',
  },
  responseMessage: {
    color: '#1f2937',
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 12,
  },
  responseEmojis: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  emoji: {
    fontSize: 24,
    marginLeft: 8,
  },
  responseActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 48,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(249, 115, 22, 0.2)',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#ea580c',
    fontWeight: '600',
    marginLeft: 8,
  },
  funFactSection: {
    marginBottom: 32,
  },
  funFactHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(37, 99, 235, 0.1)',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(37, 99, 235, 0.2)',
    marginHorizontal: -24,
    marginTop: -24,
    marginBottom: 24,
  },
  funFactHeaderText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginLeft: 12,
  },
  funFactContent: {
    paddingHorizontal: 0,
  },
  funFactText: {
    color: '#4b5563',
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'italic',
  },
  ctaSection: {
    marginBottom: 32,
  },
  ctaCard: {
    backgroundColor: 'rgba(249, 115, 22, 0.1)',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(249, 115, 22, 0.2)',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaDescription: {
    color: '#6b7280',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
    maxWidth: 300,
  },
  ctaButton: {
    backgroundColor: '#f97316',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  ctaButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#f97316',
    paddingHorizontal: 24,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
  footerCenterButton: {
    backgroundColor: 'white',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default PerplexityLawyer;